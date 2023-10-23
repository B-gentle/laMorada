import React from 'react';
import loader from '../assets/loader2.gif';

const Loader = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <img className='w-400' src={loader} alt='loading spinner' />
    </div>
  )
}

export default Loader