import React from "react";

export default function MainButtonWhite({ children, icon }) {
  return (
    <button className="flex flex-nowrap items-center gap-2 min-w-fit font-bold -tracking-tighter uppercase text-[--black] bg-[--white] rounded-full px-4 py-2">
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  );
}
