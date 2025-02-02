import React from "react";
import ButtonText from "../Typo/ButtonText";
import Link from "next/link";

export default function MainButtonBlack({ children, icon, link = '', classname, onclick }) {
  return (
    <Link href={link} onClick={onclick} className={`flex flex-nowrap gap-2 items-center min-w-fit bg-[--black] hover:bg-[#444141] rounded-full px-4 py-2 shadow-md transition-all  ${classname}`}>
      {icon && <span className="icon text-white">{icon}</span>}
      <ButtonText classname={'text-white'}>{children}</ButtonText>
    </Link>
  );
}
