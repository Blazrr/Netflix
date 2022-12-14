import Image from 'next/image'
import React from 'react'
import { Movie } from '../typing'

interface Props {
    imageUrl: string
}

function Vignette({imageUrl}:Props) {
  return (
        
        <div className={` min-h-[150px] min-w-[260px]  transition-all duration-100 ease-in-out relative  hover:scale-105 ${!imageUrl && 'hidden'}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${imageUrl}`} layout='fill' objectFit='cover' alt='just imagine it'  className='rounded-md cursor-pointer ' />
        </div>

  )
}

export default Vignette