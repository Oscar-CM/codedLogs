import { navlinks } from '@/lib/constants'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
  return (
    <div className='h-screen p-5 left-0 top-0 sticky flex-col gap-8 bg-slate-700
    shadow-xl max-md:hidden'>
        <div className='flex flex-col gap-4'>
            <h1 className='p-2 font-semibold text-2xl'> <span className='text-red-400 '>Coded</span>Logs</h1>
            {navlinks.map((link) =>(
                <Link href={link.url} key={link.label} className='
                flex gap-4 '>
                    {link.icon} <p>{link.label}</p>
                </Link>
            ))}

        </div>
       <div className='flex mt-9 items-center gap-4'>
        <UserButton/>
        <p> Profile</p>

       </div>
    </div>
  )
}

export default LeftSidebar
