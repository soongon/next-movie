import React from 'react'
import MovieCard from './MovieCard';

export default function MovieResults({movies}) {
  return (
    <div className='flex justify-center flex-wrap'>
            {
                movies.map(movie => {
                    return (
                        <MovieCard key={movie.id} movie={movie} />
                    );
                })
            }
        </div>
  )
}
