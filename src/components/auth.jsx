import React, { useState } from "react";
import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();


  // ✅ Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("✅ Google user:", user.displayName, user.email);
      navigate("/home");

    } catch (err) {
      console.error("❌ Google sign-in error:", err.message);
    }
  };

  // ✅ Anonymous Sign-In
  const handleAnonymousSignIn = async () => {
    try {
      const result = await signInAnonymously(auth);
      console.log("✅ Anonymous user:", result.user.uid);
      navigate("/home");

    } catch (err) {
      console.error("❌ Anonymous sign-in error:", err.message);
    }
  };

  // ✅ Setup Recaptcha for Phone OTP
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
        size: "invisible",
        callback: () => console.log("✅ Recaptcha Resolved"),
      });
    }
  };

 // Send OTP
const handleSendOtp = async () => {
  const sanitizedPhone = phone.replace(/\D/g, "").slice(0, 10);
  const formattedPhone = `+91${sanitizedPhone}`;

  try {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
        size: "invisible",
        callback: () => {
          console.log("Recaptcha resolved");
        },
        "expired-callback": () => {
          console.warn("Recaptcha expired, reinitializing...");
          window.recaptchaVerifier.clear();
          window.recaptchaVerifier = null;
        },
      });
    }

    const appVerifier = window.recaptchaVerifier;

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      formattedPhone,
      appVerifier
    );

    window.confirmationResult = confirmationResult;
    setOtpSent(true);
    console.log("✅ OTP sent to", formattedPhone);
  } catch (err) {
    console.error("❌ Failed to send OTP:", err.code, err.message);
    alert("OTP send error: " + err.message);
  }
};

// Verify OTP
const handleVerifyOtp = async () => {
  try {
    const confirmationResult = window.confirmationResult;
    if (!confirmationResult) throw new Error("No confirmation result saved.");

    const result = await confirmationResult.confirm(otp);
    console.log("✅ Phone user:", result.user.phoneNumber);
    navigate("/home");
  } catch (err) {
    console.error("❌ Invalid OTP:", err.code, err.message);
    alert("Invalid OTP: " + err.message);
  }
};


  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl space-y-4">
        <h2 className="text-2xl font-semibold text-center">Login</h2>

        {/* ✅ Google Sign-In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 bg-sky-500 text-white rounded-xl font-semibold"
        >
          Continue with Google
        </button>

        {/* ✅ Anonymous Login */}
        <button
          onClick={handleAnonymousSignIn}
          className="w-full py-3 bg-gray-700 text-white rounded-xl font-semibold"
        >
          Continue Anonymously
        </button>

        {/* ✅ Phone OTP Login */}
        {!otpSent ? (
          <>
            <input
              type="tel"
              placeholder="WhatsApp Number"
              value={phone}
              maxLength={10}
              inputMode="numeric"
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              className="w-full border px-4 py-2 rounded-xl"
            />
            <div id="recaptcha"></div>
            <button
              onClick={handleSendOtp}
              className="w-full py-2 bg-gray-800 text-white rounded-xl"
            >
              Send OTP (via SMS)
            </button>
            <p className="text-xs text-gray-600 mt-2">
              OTP will be sent to your WhatsApp number via SMS.
            </p>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border px-4 py-2 rounded-xl"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full py-2 bg-sky-600 text-white rounded-xl"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}
