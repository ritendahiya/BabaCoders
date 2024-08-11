import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const main = {
  width: "100%",
  backgroundColor: "rgb(37, 150, 190)",
};
const SquarePayment = () => {
  const [card, setCard] = useState(null);
  const [amount, setAmount] = useState("");
  const Navigator = useNavigate();
  const location = useLocation();
  const data = JSON.parse(location.state);
  const doctorDetails = {
    name: data.Name,
    // specialty: "Cardiology",
    age: 22,
    languages: ["English", "Hindi"],
    contact: data.email,
    amount: 1000,
  };

  useEffect(() => {
    const initializeSquarePayment = async () => {
      await loadScript("https://sandbox.web.squarecdn.com/v1/square.js");

      try {
        const payments = window.Square.payments(
          "sandbox-sq0idb-RT3u-HhCpNdbMiGg5aXuVg",
          "TC4Z3ZEBKRXRH"
        );

        const card = await payments.card();
        await card.attach("#card-container");

        const cardButton = document.getElementById("card-button");
        cardButton.addEventListener("click", async () => {
          const statusContainer = document.getElementById(
            "payment-status-container"
          );

          try {
            const result = await card.tokenize();
            if (result.status === "OK") {
              console.log(`Payment token is ${result.token}`);
              statusContainer.innerHTML = `Payment Successful for ${amount} USD`;

              // Navigate to a success page or video chat
              Navigator("/videochat", { state: JSON.stringify(data) });
            } else {
              let errorMessage = `Tokenization failed with status: ${result.status}`;
              if (result.errors) {
                errorMessage += ` and errors: ${JSON.stringify(result.errors)}`;
              }
              throw new Error(errorMessage);
            }
          } catch (e) {
            console.error(e);
            statusContainer.innerHTML = "Payment Failed";
          }
        });
      } catch (error) {
        console.error("Failed to initialize Square payment:", error);
      }
    };

    initializeSquarePayment();
  }, [amount]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100" style={main}>
      <div className="w-full max-w-4xl p-8 bg-white shadow-md rounded-md flex">
        <div className="w-1/3 pr-8">
          <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
          <p>
            <strong>Name:</strong> {data.Name}
          </p>
          {/* <p>
            <strong>Specialty:</strong> {doctorDetails.specialty}
          </p> */}
          <p>
            <strong>Age:</strong> {doctorDetails.age}
          </p>
          {/* <p>
            <strong>Languages:</strong> {doctorDetails.languages.join(", ")}
          </p> */}
          <p>
            <strong>Contact:</strong> {data.email}
          </p>
        </div>

        <div className="w-2/3">
          <div id="payment-form">
            <div id="payment-status-container" className="mb-4"></div>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-gray-700 font-semibold mb-2"
                value={amount}
              >
                Amount (USD) 100$
              </label>
            </div>
            <div id="card-container" className="mb-4"></div>
            <button
              id="card-button"
              type="button"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              onClick={() => {
                console.log(data.Name);
              }}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquarePayment;

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};
