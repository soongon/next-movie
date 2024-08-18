import Image from 'next/image';
import React from 'react'

export default async function MovieDetails({params}) {
    
    const API_KEY = process.env.API_KEY;

    const url = `https://api.themoviedb.org/3/movie/${params.id}?language=ko-KR`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };

    try {
        const response = await fetch (url, options);
        const movie = await response.json();
        return (
            <div className='w-full'>
                <div className='p-4 pt-8 flex content-center max-w-6xl mx-auto'>
                    <Image
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                        width={300}
                        height={300}
                        alt={movie.title}
                        className='rounded-lg'
                        style={{maxWidth: '100%', maxHeight: '100%'}} />
                    <div className='p-3'>
                        <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
                        <p className='text-lg mb-3'>{movie.overview}</p>
                        <p className='mb-3'>
                            <span className='font-semibold mr-1'>Date Released: </span>
                            <span>{movie.release_date || movie.first_air_date}</span>
                        </p>
                        <p className='mb-3'>
                            <span className='font-semibold mr-1'>Rating:</span>
                            <span>{movie.vote_count}</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    } catch (e) {
        throw Error(e);
    }
}
