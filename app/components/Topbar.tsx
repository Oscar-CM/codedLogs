"use client"
import React, { useState } from 'react'

import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { IoMenu } from "react-icons/io5";
import { navlinks } from '@/lib/constants'

const Topbar = () => {
    const [dropdownMenu, setdropdownMenu] = useState(false);
    return (
        <div>
            <div className='flex gap-3 w-full sticky p-3'>
                <h1 className='bg-slate-400 p-1 rounded-xl'>BALANCE $0</h1>
                <Link href="/send"> <h1 className='bg-green-400 p-1 rounded-xl'> Top Up</h1></Link>

            </div>
        <div className='flex sticky z-auto w-screen overflow-hidden justify-between px-8 items-center shadow-xl lg:hidden'>
            <h1 className='p-4'> CodedLogs</h1>
            <div className='flex gap-4 max-md:hidden items-center'>

                {navlinks.map((link) => (
                    <Link href={link.url} key={link.label} className='
                flex gap-4 '>
                        <p>{link.label}</p>
                    </Link>
                ))}

            </div>
            <div className='relative flex lg:mt-9 md:ml-4 items-center gap-4 '>
                <UserButton />
                <p className='md:hidden'> Profile</p>
                <IoMenu className='cursor-pointer md:hidden' onClick={() => setdropdownMenu(!dropdownMenu)} />
                {dropdownMenu && (
                <div className='absolute flex flex-col gap-4 top-10 right-2 p-5
                bg-white shadow-xl rounded-lg'>
                    <p></p>
                    {navlinks.map((link) => (
                        <Link href={link.url} key={link.label} className='flex gap-4'>
                            {link.icon} <p>{link.label}</p>
                            
                        </Link>
                    ))}
                </div>
                )}
            </div>
        </div>
        </div>
    )
}

export default Topbar
