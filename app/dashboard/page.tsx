"use client"
import Sidebar from '@/components/sidebar'
import useAuth from '@/hooks/useAuth'
import React, { useEffect, useState } from 'react'

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
        <div>
          <p>Good Morning, {name}</p>
        </div>
      </div>
    </>
  );
}
