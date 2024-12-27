import React from 'react'
import StudentProvider from './context/StudentProvider'

const Providers = ({children}) => {
  return (
    <StudentProvider>
        {children}
    </StudentProvider>
  )
}

export default Providers