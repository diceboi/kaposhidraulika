import React from 'react'

export default function H3({ children, classname }) {
  return (
    <h1 className={`lg:text-3xl md:text-2xl sm:text-lg text-md font-extrabold uppercase tracking-tight ${classname}`}>
        {children}
    </h1>
  )
}
