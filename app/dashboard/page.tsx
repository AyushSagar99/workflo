"use client"
import Sidebar from '@/components/sidebar'
import useAuth from '@/hooks/useAuth'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import icon from "../../public/icon.png"
import icon2 from "../../public/icon2.png"
import icon3 from "../../public/icon3.png"

export default function Dashboard() {
  useAuth();

  const [name, setName] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  return (
    <>
      <div className='flex'>
        <div>
          <Sidebar />
        </div>
        <div className='flex flex-col w-full p-4'>
          <p className='text-4xl mb-4'>Good Morning, {name}!</p>
          <div className='mt-2 flex gap-4 drop-shadow-md'>
            <div className='w-80 bg-background p-4 rounded-md flex'>
              <Image
                src={icon}
                alt='icon'
                width={90}
                height={61}
                className='mr-4'
              />
              <div className='flex flex-col'>
                <p className='font-bold'>Introducing Tags</p>
                <p>Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.</p>
              </div>
            </div>
            <div className='w-80 bg-background p-4 rounded-md flex'>
              <Image
                src={icon2}
                alt='icon'
                width={90}
                height={61}
                className='mr-4'
              />
              <div className='flex flex-col'>
                <p className='font-bold'>Share Notes Instantly</p>
                <p>Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.</p>
              </div>
            </div>
            <div className='w-96 bg-background p-4 rounded-md flex'>
              <Image
                src={icon3}
                alt='icon'
                width={90}
                height={61}
                className='mr-4'
              />
              <div className='flex flex-col'>
                <p className='font-bold'>Access Anywhere</p>
                <p>Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
