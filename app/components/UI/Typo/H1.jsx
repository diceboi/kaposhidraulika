import React from 'react'

export default function H1({ children, classname }) {
  return (
    <h1 className={`lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-extrabold tracking-tighter ${classname}`}>
        {children}
    </h1>
  )
}
