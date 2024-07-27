"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

function Signup() {
  const router=useRouter();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  async function submit(e: FormEvent<HTMLButtonElement>){
    e.preventDefault();
    try{
      const res=await axios.post("http://localhost:8000/signup",{
        name,
        email,
        password
      });
      if(res.data.message ==="Signed In"){
        localStorage.setItem("token",res.data.token);
        router.push("/dashboard");
      }

    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <>
        <div className='absolute top-1/3 left-1/2 gap-8'>
            <div className='flex flex-col justify-center items-center gap-5 border border-black rounded-lg w-[350px] h-[300px] drop-shadow-md'>
                Welcome to Workflo!
                <input className='bg-customGray p-2 rounded-md h-[30px] w-[250px] ' placeholder='Your Name' onChange={(e)=>{setName(e.target.value)}} />

                <input className='bg-customGray p-2 rounded-md h-[30px] w-[250px] ' placeholder='Your Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type='password' className='bg-customGray p-2 rounded-md h-[30px] w-[250px] ' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                <button onClick={submit} className='bg-purple-500 text-white p-1 h-[30px] w-[250px] rounded-md font-light '>Sign up</button>
                <p>Already have an account? <Link href={'/login'} className='hover:underline text-indigo-400'>Log in.</Link> </p>
            </div>
        </div>
    </>
  )
}

export default Signup