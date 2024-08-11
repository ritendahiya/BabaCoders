import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Deepgram } from "@deepgram/sdk";

const main = {
  width: "100%",
  backgroundColor: "rgb(38,150,190)",
};

const createRoom = async () => {
  const apiKey =
    "20a4c5b7bb6cf1d70175ee7182c6423a648dff647dbd80112d8407fd0936bd25";

  try {
    const response = await axios.post(
      "https://api.daily.co/v1/rooms",
      {
        properties: {
          enable_chat: true,
          enable_screenshare: true,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.url;
  } catch (error) {
    console.error("Error creating room:", error);
    return null;
  }
};

const Videochat = () => {
  const [roomUrl, setRoomUrl] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [transcript, setTranscript] = useState(""); // State to hold the transcript
  const location = useLocation();
  const data = JSON.parse(location.state);
  const deepgramRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const [email,setemail]=useState(data.email)

  useEffect(() => {
    if (roomUrl && paymentSuccess) {
      startDeepgram();
    }
  }, [roomUrl, paymentSuccess]);

  const handleCreateRoom = async () => {
    const url = await createRoom();
    if (url) {
      setRoomUrl(url);
      setPaymentSuccess(true);
    }
  };

  const handleFeedbackSubmit = () => {
    // You can replace this with an API call to store feedback in the backend
    console.log("Feedback submitted:", feedback);
    setFeedbackSubmitted(true);
  };

  const startDeepgram = async () => {
    try {
      // Start capturing the audio from the user's microphone
      mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });

      // Initialize Deepgram SDK with your API key
      const deepgram = new Deepgram("1d24c4f595274465860c0625cc581968db84f8cd");

      // Create a new Deepgram live transcription connection
      const socket = deepgram.transcription.live({
        punctuate: true,
        interim_results: true,
      });

      socket.addListener("open", () => {
        console.log("Connected to Deepgram!");
      });

      socket.addListener("transcriptReceived", (transcription) => {
        const newTranscript = transcription.channel.alternatives[0].transcript;
        setTranscript((prev) => `${prev} ${newTranscript}`);
      });

      socket.addListener("close", () => {
        console.log("Deepgram connection closed.");
      });

      socket.addListener("error", (error) => {
        console.error("Deepgram error:", error);
      });

      // Send audio data to Deepgram
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const source = audioContext.createMediaStreamSource(
        mediaStreamRef.current
      );
      const processor = audioContext.createScriptProcessor(4096, 1, 1);

      source.connect(processor);
      processor.connect(audioContext.destination);

      processor.onaudioprocess = (event) => {
        const audioData = event.inputBuffer.getChannelData(0);
        const int16Array = new Int16Array(audioData.length);
        for (let i = 0; i < audioData.length; i++) {
          int16Array[i] = audioData[i] * 0x7fff;
        }
        socket.send(int16Array);
      };

      deepgramRef.current = socket;
    } catch (error) {
      console.error("Error starting Deepgram:", error);
    }
  };
  const posturl = async() => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { dat } = await axios.post(
      `http://localhost:8000/api/v1/mail/maillink`,
      { email,roomUrl },
      config
    );
  };
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      style={main}
    >
      {!roomUrl ? (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-6">
            Daily.co Video Call
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">Patient Details</h2>
            <p className="mb-2">
              <strong>Name:</strong> {data.Name}
            </p>
            <p className="mb-2">
              <strong>Age:</strong> {data.Age}
            </p>
            <p className="mb-2">
              <strong>Gender:</strong> {data.Gender}
            </p>
            <p className="mb-2">
              <strong>Contact:</strong> {data.email}
            </p>
          </div>
          <button
            onClick={handleCreateRoom}
            className="bg-white text-green-500 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Create Room
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Payment Successful
          </h2>
          <p className="mb-6">
            Thank you for your payment! Your video consultation room has been
            created.
          </p>
          <button
            onClick={() => {
              posturl();
              window.open(roomUrl, "_blank");
            }}
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 mb-4"
          >
            Join Video Call
          </button>
          <button
            onClick={() => setRoomUrl("")}
            className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
          >
            End Call
          </button>

          {paymentSuccess && !feedbackSubmitted && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">
                We Value Your Feedback
              </h3>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback here..."
                className="w-full p-4 border rounded-md mb-4"
                rows="4"
              />
              <button
                onClick={handleFeedbackSubmit}
                className="bg-green-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
              >
                Submit Feedback
              </button>
            </div>
          )}

          {feedbackSubmitted && (
            <p className="text-green-600 mt-4">Thank you for your feedback!</p>
          )}

          {transcript && (
            <div className="mt-6 bg-gray-100 p-4 rounded-md shadow">
              <h3 className="text-xl font-semibold mb-2">Live Transcript</h3>
              <p className="text-left text-gray-800">{transcript}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Videochat;
