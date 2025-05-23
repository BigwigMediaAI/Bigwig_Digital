import { useState } from "react";
import { PhoneCall, X, MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-0 right-10 flex flex-col items-end z-50">
      {isOpen && (
        <div className="flex items-center space-x-2 mb-2">
          {/* Call Button */}
          <div
            className="relative flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg cursor-pointer "
            onClick={() => setShowTooltip(!showTooltip)}
          >
            <PhoneCall className="text-white" size={24} />
            {showTooltip && (
              <div className="w-60 absolute bottom-full mb-2 bg-white text-black text-sm px-2 py-1 rounded shadow-md ">
                Contact Number: +91 83685 73451
              </div>
            )}
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+918368573451"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg "
          >
            <MessageCircle className="text-white" size={24} />
          </a>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <div
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer mb-11 "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <MessageCircle className="text-white" size={24} />
        )}
      </div>
    </div>
  );
}
