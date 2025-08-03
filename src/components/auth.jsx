import React, { useState } from "react";

export default function AuthPage() {
  const [mode, setMode] = useState("email"); // "email" or "whatsapp"
  const [step, setStep] = useState("login"); // "login" or "otp"
  const [phone, setPhone] = useState("");

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep("otp");
      // send OTP logic goes here (Firebase or custom API)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => {
              setMode("email");
              setStep("login");
            }}
            className={`px-4 py-2 font-medium rounded-l-xl ${
              mode === "email" ? "bg-sky-500 text-white" : "bg-gray-100"
            }`}
          >
            Email
          </button>
          <button
            onClick={() => {
              setMode("whatsapp");
              setStep("login");
            }}
            className={`px-4 py-2 font-medium rounded-r-xl ${
              mode === "whatsapp" ? "bg-sky-500 text-white" : "bg-gray-100"
            }`}
          >
            WhatsApp
          </button>
        </div>

        {mode === "email" && (
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl"
            >
              Sign In
            </button>
          </form>
        )}

        {mode === "whatsapp" && step === "login" && (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <input
              type="tel"
              placeholder="WhatsApp Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl"
            >
              Get OTP
            </button>
          </form>
        )}

        {mode === "whatsapp" && step === "otp" && (
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <p className="text-sm text-gray-600 text-center">
              OTP has been shared on your WhatsApp number
            </p>
            <button
              type="submit"
              className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
