import React from 'react'

export default function H3({ children, classname }) {
  return (
    <h3 className={`md:text-[2vw] md:leading-[2vw] text-xl leading-5 font-semibold tracking-tighter ${classname} z-10`}>
        {children}
    </h3>
  )
}
