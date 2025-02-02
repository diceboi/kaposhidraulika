import React from 'react'

export default function H1({ children, classname }) {
  return (
    <h1 className={`md:text-6xl text-4xl leading-9 font-black tracking-tighter ${classname} z-10`}>
        {children}
    </h1>
  )
}
