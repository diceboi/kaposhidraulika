import React from 'react'

export default function Par({ children, classname }) {
  return (
    <p className={`md:text-[1.2vw] md:leading-[1.2vw] text-lg leading-4 font-medium tracking-tight ${classname}`}>
        {children}
    </p>
  )
}
