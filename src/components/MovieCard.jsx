import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MovieCard({movie}) {
  return (
    <div className="group cursor-pointer m-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <Link href={`/movie/${movie.id}`}>
            <Image 
                className="rounded-t-lg group-hover:opacity-75 transition-opacity duration-300" 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                width={500}
                height={300}
                alt={movie.title} />
        </Link>
        <div className="p-5">
            <Link href={`/movie/${movie.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {movie.title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700">
                {movie.overview}</p>
        </div>
    </div>
  )
}
