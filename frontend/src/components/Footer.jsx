import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='text-center'>LaMorada &copy; {year}</footer>
  )
}

export default Footer