"use client"

import React, { useEffect } from 'react'

export default function Error({error, reset}) {

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div>
            <h2>에러가 발생했습니다.</h2>
            <button className='hover:text-amber-600' onClick={() => reset()}>다시 시도</button>
        </div>
    )
}
