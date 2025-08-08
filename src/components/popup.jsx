import React from "react";
import { X } from "lucide-react";
import {useNavigate} from "react-router-dom";


const SupportPopup = ({ onClose }) => {
  const navigate =useNavigate();
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 max-w-sm relative animate-fade-in">
        
        {/* Close button */}
        <button
          onClick={()=>navigate('/profile')} 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <h2 className="text-xl font-semibold mb-4">Support</h2>
        <p className="text-sm mb-2">
          📧 Contact us at:{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-600 hover:underline"
          >
            support@example.com
          </a>
        </p>
        <p className="text-sm">
          ❓{" "}
          <a
            href="/raise-query"
            className="text-blue-600 hover:underline"
          >
            Raise a query here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SupportPopup;