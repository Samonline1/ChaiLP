import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-1">
      <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-widest text-royal-800 uppercase">
        Royal Chai
      </h1>
      <div className="h-0.5 w-16 bg-royal-400 rounded-full" />
      <span className="text-[10px] md:text-xs tracking-[0.3em] text-royal-600 font-sans uppercase">
        Est. 1924
      </span>
    </div>
  );
};

export default Logo;
