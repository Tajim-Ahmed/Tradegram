import React, { useState } from "react";
import { HelpCircle } from "lucide-react";
import SupportPopup from "./popup";

const SupportWrapper = () => {
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div>
      {/* Support button only for dextop will set for mobile soon */}
      <button
        onClick={() => setShowSupport(true)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <HelpCircle size={24} />
      </button>

      {/* Conditional Popup */}
      {showSupport && <SupportPopup onClose={() => setShowSupport(false)} />}
    </div>
  );
};

export default SupportWrapper;