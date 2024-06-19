'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation'

import { Staatliches as Staat } from "next/font/google";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button"

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


export default function Landing() {
  const router = useRouter()

  return (
    <div className="h-screen grid grid-cols-[1fr_auto] content-around">
      <div className="grid-flow-column text-center">
        <div className='mx-auto w-56'>
          <Image
            className="ml-8"
            src="/Gold.png"
            alt="logo"
            height={200}
            width={200}
          />
        </div>
        <div className={cn(f.variable, "grid grid-cols-3 gap-x-4 mb-24 font-sans truncate text-[80px] text-center")}>
          <p className='ml-[42%]'>WELCOME TO</p>
          <p className="text-yellow-300 ml-[58%]">EVENT</p>
          <p className='text-yellow-300 mr-[33%]'>WISE</p>
        </div>
        <Button onClick={() => router.replace('/login')} className={cn(fm.variable, "font-sans mx-auto mb-12 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400 hover:from-red-500 hover:to-orange-300 hover:text-white-200 text-white-200 border-0")} variant="outline">GET STARTED</Button>
      </div>
    </div>
  );
}