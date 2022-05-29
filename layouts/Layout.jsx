
import React from 'react'
import NavBar from 'components/NavBar'
import Header from 'components/Header'

const Layout = ({children}) => {
  return (
    <div className='d-flex flex-column h-auto   '>
        <Header />
        <NavBar  />
        <div className='d-flex flex-row vh-100 '>
            <div className='h-100 w-100' >
                {children}
            </div>
        </div>
        
    </div>
  )
}

export default Layout