import React from 'react'

export default function ParBig({ children, classname }) {
  return (
    <p className={`lg:text-xl md:text-lg sm:text-md text-md font-semibold tracking-tight ${classname}`}>
        {children}
    </p>
  )
}
