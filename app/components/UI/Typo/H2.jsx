import React from 'react'

export default function H2({ children, classname }) {
  return (
    <h2 className={`md:text-5xl text-3xl leading-6 font-extrabold tracking-tighter ${classname} z-10`}>
        {children}
    </h2>
  )
}
