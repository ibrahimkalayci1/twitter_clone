import React from 'react'

const GoogleButton = () => {
  return (
    <button className=' bg-white flex items-center py-2 px-10 rounded-full gap-3 transition hover:bg-gray-300 text-black whitespace-nowrap'>
        <img src="logo.png" className=' h-[20px]' />
        Google ile Giriş Yap
    </button>
  )
}

export default GoogleButton