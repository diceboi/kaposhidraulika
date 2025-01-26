import React from 'react'

export default function H2({ children, classname }) {
  return (
    <h1 className={`lg:text-4xl md:text-3xl sm:text-2xl text-xl font-extrabold tracking-tight ${classname}`}>
        {children}
    </h1>
  )
}
