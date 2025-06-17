import { useEffect, useState } from "react";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-[#4E6CBA] max-w-sm w-full p-6 rounded-lg shadow-xl relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-lg font-bold text-white"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-center mb-1 text-white">
              Let's Grow Together!
            </h2>
            <p className="text-center mb-4 text-white">Request a FREE Call!</p>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Business Name"
                className="w-full p-2 border rounded"
              />
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-1/2 p-2 border rounded"
                />
                <input
                  type="tel"
                  placeholder="Mobile No."
                  className="w-1/2 p-2 border rounded"
                />
              </div>
              <textarea
                placeholder="Explain your requirements (minimum 50 characters)"
                className="w-full p-2 border rounded"
                rows={3}
              ></textarea>

              {/* <div className="bg-white p-2 rounded border">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  I'm not a robot
                </label>
              </div> */}

              <button
                type="submit"
                className="bg-[#DA4D42] text-white w-full py-2 rounded-full mt-2 hover:bg-red-700"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
