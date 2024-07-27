"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

function Login() {
  const router=useRouter();
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  async function submit(e: FormEvent<HTMLButtonElement>){
    e.preventDefault();
    try{
      const res=await axios.post("http://localhost:8000/login",{
        email,
        password
      });
      if(res.data.message ==="Loged In"){
        router.push("/dashboard");
      }
      else if(res.data.message === "User not exist"){
        alert("User does not exist.")
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
                <input className='bg-customGray p-2 rounded-md h-[30px] w-[250px] ' placeholder='Your Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type='password' className='bg-customGray p-2 rounded-md h-[30px] w-[250px] ' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                <button onClick={submit} className='bg-purple-500 text-white p-1 h-[30px] w-[250px] rounded-md font-light '>Log in</button>
                <p className='text-sm'>Don't have an account? Create a  <Link href={'/'} className='hover:underline text-indigo-400'>new account.</Link> </p>
            </div>
        </div>
    </>
  )
}

export default Login