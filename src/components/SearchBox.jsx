"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SearchBox() {

    const [search, setSearch] = useState('');
    const router = useRouter();

    const onSubmitHandler = e => {
        e.preventDefault();
        //window.location.href = `/search?q=${search}`;
        router.push(`/search/${search}`);
    };
    return (
        <form 
            className='flex justify-between px-5 max-w-6xl mx-auto'
            onSubmit={onSubmitHandler}>
            <input 
                onChange={e => setSearch(e.target.value)}
                type='text' 
                placeholder='키워드를 입력해주세요'
                className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1'/>
            <button 
                className='text-amber-600' 
                disabled={search === ''}
            >
                Search
            </button>
        </form>
    )
}
