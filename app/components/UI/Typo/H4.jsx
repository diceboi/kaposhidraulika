import React from 'react'

export default function H4({ children, classname }) {
  return (
    <h4 className={`md:text-2xl text-xl leading-5 font-bold tracking-tighter ${classname} z-10`}>
        {children}
    </h4>
  )
}
