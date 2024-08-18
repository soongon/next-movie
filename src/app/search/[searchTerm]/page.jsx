import MovieResults from '@/components/MovieResults';
import React from 'react'

export default async function SearchResult({params}) {

    const {searchTerm} = params;

    const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=ko-KR&page=1&region=kr`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    };

    const response = await fetch(url, options);
    const json = await response.json();
    const movies = json.results;

    return (
        <div>
            {
                movies && movies.length === 0 && (
                    <h1 className='text-center pt-6'>검색 결과가 없습니다.</h1>
                )
            }
            {
                movies && movies.length > 0 && <MovieResults movies={movies} />
            }
        </div>
    )
}
