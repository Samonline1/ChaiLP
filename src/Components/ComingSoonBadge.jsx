import React from "react";

const ComingSoonBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
      <span className=" blink h-2 w-2 bg-amber-500 rounded-full" />
      Coming Soon
    </div>
  );
};

export default ComingSoonBadge;
