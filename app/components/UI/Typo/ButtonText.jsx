import React from 'react'

export default function ButtonText({ children, classname }) {
  return (
    <p className={`lg:text-lg text-sm font-bold tracking-tight ${classname}`}>
        {children}
    </p>
  )
}