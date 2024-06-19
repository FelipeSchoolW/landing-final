'use client'
import { Fragment, useState } from 'react'
import { SquareChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Staatliches as Staat } from "next/font/google";
import { Inter } from "next/font/google";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"

import { Button } from "@/components/ui/button"
import { FormEvent } from 'react';
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils"

const f = Staat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: '400',
})

const fm = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
})

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Login() {
  const router = useRouter()
  const [role, setRole] = useState("Role")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
 
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
 
    if (response.ok) {
      router.push('/profile')
    } else {
      // Handle errors
    }
  }

  return (
    <Card className='mx-auto px-16 pt-0 bg-background border border-0 w-96'>
      <CardHeader className="foreground">
        <CardTitle className={cn(f.variable, "font-sans text-amber-400 text-center text-5xl")}>
          REGISTER
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-center">
      <div className="grid grid-cols-2 gap-x-2">
        <h1 className="bg-white w-24 ml-4 text-center py-2">{role}</h1>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-black bg-white mx-5 py-1 text-center flex justify-center items-center"><SquareChevronDown size={30} /></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => {setRole("Admin")}} className="cursor-pointer">Admin</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {setRole("Organizer")}} className="cursor-pointer">Organizer</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {setRole("Participant")}} className="cursor-pointer">Participant</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </CardFooter >
      <CardContent>
        <form className="grid justify-center" onSubmit={handleSubmit}>
          <input className="rounded-md w-[300px] focus:ring-0 px-3 py-3 mb-5 w-full text-sm" type="username" name="username" placeholder="Username" required />
          <input className="rounded-md w-[300px] focus:ring-0 px-3 py-3 mb-5 w-full text-sm" type="email" name="email" placeholder="Email" required />
          <input className="rounded-md w-[300px] focus:ring-0 px-3 py-3 mb-5 w-full text-sm" type="phone-number" name="phone-number" placeholder="Phone-number" required />
          <input className="rounded-md w-[300px] focus:ring-0 px-3 py-3 mb-5 w-full text-sm" type="password" name="password" placeholder="Password" required />
          <input className="rounded-md w-[300px] px-3 py-3 mb-5 w-full text-sm" type="confirm-password" name="confirm-password" placeholder="Confirm-Password" required />
          <button className="rounded-md bg-amber-400 text-black text-center just-center px-2 py-3 border border-black mb-5" type="submit">Create Account</button>
          <Link href='/login' className="text-white text-center underline">Back To Login</Link>
        </form>
      </CardContent>
     
    </Card>
  );
}
