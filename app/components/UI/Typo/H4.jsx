import React from 'react'

export default function H4({ children, classname }) {
  return (
    <h1 className={`lg:text-2xl md:text-xl sm:text-lg text-md font-bold tracking-tight ${classname}`}>
        {children}
    </h1>
  )
}
