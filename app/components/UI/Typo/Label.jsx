import React from 'react'

export default function Label({ children, classname }) {
  return (
    <p className={`lg:text-[12px] lg:leading-5 text-xs leading-4 font-normal tracking-tight ${classname}`}>
        {children}
    </p>
  )
}
