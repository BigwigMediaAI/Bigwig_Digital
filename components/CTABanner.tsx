"use client";
import { useState } from "react";
import PopupForm from "./PopupForm";

interface CTABannerProps {
  title: string;

  buttonText: string;
}

function CTABanner({ title, buttonText }: CTABannerProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="w-full py-12 bg-[var(--primary-color)] text-white text-center rounded-2xl shadow-lg">
      <h2 className="w-5/6 mx-auto text-2xl md:text-3xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-lg opacity-90 mb-6">
        Partner with Dubai’s trusted SEO experts and achieve measurable,
        sustainable growth.
      </p>
      <button
        onClick={() => setIsPopupOpen(true)}
        className="px-8 py-3 bg-white text-[var(--primary-color)] font-semibold rounded-full shadow-md hover:shadow-xl transition"
      >
        {buttonText}
      </button>
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}

export default CTABanner;
