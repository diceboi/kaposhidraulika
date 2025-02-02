import React from 'react'

export default function Par({ children, classname }) {
  return (
    <p className={`md:text-lg text-lg leading-6 font-medium  ${classname}`}>
        {children}
    </p>
  )
}
