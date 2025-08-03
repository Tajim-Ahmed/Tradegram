import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink
} from "firebase/auth";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState("");

  // GOOGLE SIGN-IN
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google user:", user.displayName, user.email);
    } catch (err) {
      console.error(err);
    }
  };

  // PHONE OTP LOGIN
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
        size: "invisible",
        callback: () => console.log("Recaptcha Resolved"),
      });
    }
  };

  const handleSendOtp = async () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`;
  setupRecaptcha();

    try {
      await signInWithPhoneNumber(auth, formattedPhone, appVerifier).then(
        (confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setOtpSent(true);
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const result = await window.confirmationResult.confirm(otp);
      const user = result.user;
      console.log("Phone user:", user.phoneNumber);
    } catch (err) {
      console.error("Invalid OTP", err);
    }
  };

  // EMAIL LINK LOGIN
  const handleEmailLinkLogin = async () => {
    const actionCodeSettings = {
      url: window.location.href,
      handleCodeInApp: true,
    };
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      alert("Email link sent!");
    } catch (err) {
      console.error(err);
    }
  };

  // Handle login when email link is clicked
  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const storedEmail = window.localStorage.getItem("emailForSignIn");
      if (storedEmail) {
        signInWithEmailLink(auth, storedEmail, window.location.href)
          .then((result) => {
            console.log("Email link user:", result.user.email);
          })
          .catch(console.error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl space-y-4">
        <h2 className="text-2xl font-semibold text-center">Login</h2>

        {/* Google Sign-In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 bg-sky-500 text-white rounded-xl font-semibold"
        >
          Continue with Google
        </button>

        {/* Phone Sign-In */}
        {!otpSent ? (
          <>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border px-4 py-2 rounded-xl"
            />
            <div id="recaptcha"></div>
            <button
              onClick={handleSendOtp}
              className="w-full py-2 bg-gray-800 text-white rounded-xl"
            >
              Send OTP
            </button>
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

        {/* Email Link Login */}
        <div className="pt-4 border-t">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded-xl"
          />
          <button
            onClick={handleEmailLinkLogin}
            className="w-full mt-2 py-2 bg-gray-900 text-white rounded-xl"
          >
            Send Login Link
          </button>
        </div>
      </div>
    </div>
  );
}
