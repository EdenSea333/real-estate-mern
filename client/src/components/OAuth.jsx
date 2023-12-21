import React from 'react'

export default function OAuth() {

    const handleGoogleClick = async () => {
        try {
            
        } catch (error) {
            console.log('could not sign in with google', error);
        };
    }
  return (
    <button onCLick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg'>CONTINUE WITH GOOGLE</button>
  )
}
