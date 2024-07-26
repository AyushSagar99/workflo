import { Input } from 'postcss'
import React from 'react'

function Signup() {
  return (
    <>
        <div className='absolute top-1/3 left-1/2 gap-8'>
            <div className='flex flex-col justify-center items-center gap-5 border border-black rounded-lg w-[350px] h-[300px] drop-shadow-md'>
                Welcome to Workflo!
                <input className='bg-customGray p-2 rounded-md h-[30px] w-[250px] ' placeholder='Your Name' />
                <input className='bg-customGray p-2 rounded-md h-[30px] w-[250px] ' placeholder='Your Email'/>
                <input type='password' className='bg-customGray p-2 rounded-md h-[30px] w-[250px] ' placeholder='Password'/>
                <button className='bg-purple-500 text-white p-1 h-[30px] w-[250px] rounded-md font-light '>Sign up</button>
            </div>
        </div>
    </>
  )
}

export default Signup