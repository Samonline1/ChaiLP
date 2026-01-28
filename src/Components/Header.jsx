import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-center pt-4">
      <div className="flex items-center gap-4">
        {/* Left Line */}
        <div className="w-8 h-0.5 bg-amber-600"></div>

        {/* Brand Text */}
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold tracking-wider text-stone-900 uppercase">
            Royal Chai
          </h1>
          <p className="text-[0.6rem] text-amber-700 tracking-[0.3em] uppercase mt-1">
            Est. 2024
          </p>
        </div>

        {/* Right Line */}
        <div className="w-8 h-0.5 bg-amber-600"></div>
      </div>
    </header>
  );
};

export default Header;
