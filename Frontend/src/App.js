import logo from "./logo.svg";
import "./App.css";
import MarketingPage from "./templates/marketing-page/MarketingPage";
import SignIn from "./templates/sign-in-side/signinpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./templates/blog/Blog";
import Appointment from "./pages/makeanappointment/appointment";
import AppAppBar from "./Components/Navbar/navbar";
import SignUp from "./templates/sign-up/SignUp";
import Videochat from "./pages/VideoChat";
import SquarePayment from "./pages/Payments";
function App() {
  return (
    <BrowserRouter>
      <AppAppBar />

      <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/videochat" element={<Videochat />} />
        <Route path="/payment" element={<SquarePayment />} />
      </Routes>
      {/* <BotpressChat/> */}
    </BrowserRouter>
    // <div>
    //   <Price />
    // </div>
  );
}

export default App;
