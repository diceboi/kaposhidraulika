import React from 'react'

export default function H4({ children, classname }) {
  return (
    <h4 className={`md:text-[1vw] md:leading-[1vw] text-lg leading-4 font-medium tracking-tight ${classname}`}>
        {children}
    </h4>
  )
}
