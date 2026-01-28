import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl px-4">
      {/* Headline with gradient */}
      <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6">
        Brew the{" "}
        <span className="italic bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
          Royal Tradition
        </span>{" "}
      </h2>

      {/* Description */}
      <p className="font-sans text-stone-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
        Experience the timeless elegance of authentic spices blended for the
        palaces of India. A premium heritage, poured into every cup.
      </p>
    </div>
  );
};

export default HeroSection;
