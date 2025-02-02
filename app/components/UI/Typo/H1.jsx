import React from 'react'

export default function H1({ children, classname }) {
  return (
    <h1 className={`md:text-[4vw] md:leading-[4vw] text-3xl leading-7 font-black tracking-tighter ${classname} z-10`}>
        {children}
    </h1>
  )
}
