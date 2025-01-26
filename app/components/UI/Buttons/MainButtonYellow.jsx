import React from "react";

export default function MainButtonYellow({ children, icon }) {
  return (
    <button className="flex flex-nowrap items-center gap-2 min-w-fit font-bold -tracking-tighter uppercase text-[--black] bg-[--yellow] rounded-full px-4 py-2">
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  );
}
