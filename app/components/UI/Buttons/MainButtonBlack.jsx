import React from "react";
import ButtonText from "../Typo/ButtonText";

export default function MainButtonBlack({ children, icon }) {
  return (
    <button className="flex flex-nowrap gap-2 items-center min-w-fit bg-[--black] rounded-full px-4 py-2">
      {icon && <span className="icon text-white">{icon}</span>}
      <ButtonText classname={'text-white'}>{children}</ButtonText>
    </button>
  );
}
