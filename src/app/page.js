import MovieResults from '@/components/MovieResults';
import React from 'react'

const API_KEY = process.env.API_KEY;

export default async function page({searchParams}) {

  // 쿼리 파라미터 확보
  const category = searchParams?.category || 'now_playing';


  const url = `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1&region=kr`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    },
    next: {
      revalidate: 10
    }
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    const results = json.results;
    console.log(results);
    
    return (
      <div>
        <MovieResults movies={results}/>
      </div>
    )
  } catch (e) {
    throw Error(e);
  }

  
}
