import React, { useState } from "react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`User registered with: ${email}`);
    // logic for API submission would go here
    setEmail("");
    alert("Thank you for your interest! We will notify you soon.");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow px-6 py-3.5 rounded-xl border border-stone-300 bg-white/80 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-royal-400 focus:border-transparent transition-all shadow-sm text-base"
        />
        <button
          type="submit"
          className="px-8 py-3.5 rounded-xl bg-amber-100 text-amber-700 font-medium tracking-wide hover:bg-royal-900 focus:ring-2 focus:ring-offset-2 focus:ring-royal-800 transition-colors shadow-md whitespace-nowrap"
        >
          Notify Me
        </button>
      </form>
      <p className="mt-3 text-center text-sm text-stone-500">
        Be the first to know when our limited batch arrives.
      </p>
    </div>
  );
};

export default EmailSignup;
