"use client"
import useAuth from '@/hooks/useAuth'
import React from 'react'

export default function Dashboard() {
  useAuth()
  return (
    <div> Dashboard</div>
  )
}
