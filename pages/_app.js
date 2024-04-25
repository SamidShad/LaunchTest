import "@/styles/globals.css";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ToastContainer position="bottom-center" theme="dark" hideProgressBar />
      <div className="background_animation">
        <div className="animated_balls"></div>
        <div className="animated_balls"></div>
        <div className="animated_balls"></div>
      </div>
      <Component {...pageProps} />
      <Script src="https://smtpjs.com/v3/smtp.js"></Script>
    </>
  );
}
