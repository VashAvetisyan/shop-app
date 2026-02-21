import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-16 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:items-start md:justify-between bg-gray-800 p-8 rounded-lg'>
            <div className='flex flex-col gap-4 items-center md:items-start'>
                <Link href='/'>
                    <Image src="/logo.png" alt="Logo" width={36} height={36}/>
                    <p className='hidden md:block text-md font-medium tracking-wider text-white'>Shop App.</p>
                </Link>
                <p className='text-sm text-gray-400'>2026 Shop App.</p>
                <p className='text-sm text-gray-400'>All rights reserved</p>
            </div>
            <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
                <p className='text-sm text-amber-50'>Links</p>
                <Link href='/'>Home</Link>
                <Link href='/contact'>Contact us</Link>
                <Link href='/terms'>Terms of Service</Link> 
                <Link href='/privacy'>Privacy Policy</Link>
            </div>
            <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
                <p className='text-sm text-amber-50'>Shop</p>
                <Link href='/'>All Products</Link>
                <Link href='/new'>New Arrivals</Link>
                <Link href='/bestsellers'>Best Sellers</Link> 
                <Link href='/sale'>Sale</Link>
            </div>
            <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
                <p className='text-sm text-amber-50'>Company</p>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
                <Link href='/blog'>Blog</Link> 
                <Link href='/affiliate'>Affiliate Program</Link>
            </div>
        </div>          
    ) 
}

export default Footer