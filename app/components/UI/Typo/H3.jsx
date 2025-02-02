import React from 'react'

export default function H3({ children, classname }) {
  return (
    <h3 className={`md:text-3xl text-2xl leading-5 font-semibold tracking-tighter ${classname} z-10`}>
        {children}
    </h3>
  )
}
