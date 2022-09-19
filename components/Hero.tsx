import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Movie } from '../typing'





interface Props{
    category:Movie[]
}

function Hero({category}:Props) {

    const [movie,setMovie] = useState<Movie | null>(null)

    useEffect(() =>{
        setMovie(category[Math.floor(Math.random()*category.length)])
    },[])

  return (
    <div className='relative  '>
        <div className='absolute -z-10 h-screen w-full'>
        <Image src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}  layout='fill' objectFit='cover'  />
        </div>
        <h1 className='text-white text-2xl pt-16 md:pt-24 md:px-4 lg:px-12 px-2 md:text-3xl lg:text-5xl font-bold'>{ movie?.title}</h1>
        <p className='text-white max-w-[60%] mt-2 p-2 md:p-4 lg:p-12 text-[11px]  md:text-[16px] lg:text-xl xl:text-2xl'>{movie?.overview}</p>
    </div>
  )
}

export default Hero