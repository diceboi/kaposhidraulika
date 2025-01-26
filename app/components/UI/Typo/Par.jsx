import React from 'react'

export default function Par({ children, classname }) {
  return (
    <p className={`lg:text-[16px] lg:leading-6 text-sm leading-4 font-medium tracking-tight ${classname}`}>
        {children}
    </p>
  )
}
