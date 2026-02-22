'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'

const SearchBar = () => {
    const [value, setValue] = useState("")
    const searchParams = useSearchParams();
    const router = useRouter()

    useEffect(() => {
        const query = searchParams.get('query')
        if (query) {
            setValue(query.toString())
        } else{
            setValue("")
        }
    }, [searchParams])

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const search = () => {
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('query', value)
        }
        router.push(`/products?${params.toString()}`)
    }

    return (
        <div className='hidden md:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md'>
            <Search className='w-4 h-4 text-gray-500 cursor-pointer' onClick={search} />
            <input type="text" id='search'
                placeholder='Search...'
                className='text-sm outline-0'
                onChange={handleValue}
                value={value}
            />
        </div>
    )
}

export default function SearchBarWrapper() {
    return (
        <Suspense fallback={null}>
            <SearchBar />
        </Suspense>
    )
}