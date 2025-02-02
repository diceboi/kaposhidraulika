import React from "react";
import ButtonText from "../Typo/ButtonText";
import Link from "next/link";

export default function MainButtonYellow({ children, icon, link = '', classname, onclick }) {
  return (
    <Link href={link} onClick={onclick} className={`flex flex-nowrap gap-2 items-center min-w-fit bg-[--yellow] hover:bg-[--yellowhover] rounded-full px-4 py-2 shadow-md transition-all ${classname}`}>
      {icon && <span className="icon text-[--black]">{icon}</span>}
      <ButtonText classname={'text-[--black]'}>{children}</ButtonText>
    </Link>
  );
}
