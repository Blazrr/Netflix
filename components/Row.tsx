import React, { useRef, useState } from 'react'
import { Movie } from '../typing'
import Vignette from './Vignette'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface Props {
    category: Movie[],
    title:string
}

function Row({ category,title }: Props) {


    const rowRef = useRef<HTMLDivElement | null>(null)
    const [isMoved, setIsMoved] = useState<Boolean>(false)

    const handleClick = (direction: string) => {
        setIsMoved(true)
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth
                : scrollLeft + clientWidth

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }


    return (
        <div className='ml-2 mt-4'>
            <h2 className='text-3xl text-white font-bold'>{title}</h2>
            <div  className='relative mt-2 group '>
                <FaArrowLeft className='h-8 w-8 text-white absolute left-4 z-20 cursor-pointer top-16 hidden group-hover:inline-block' onClick={() => handleClick('left')} />
                <FaArrowRight className='h-8 w-8 text-white absolute right-5 z-20 cursor-pointer bottom-20 top-16 hidden group-hover:inline-block' onClick={() => handleClick('right')} />
                <div className='flex space-x-3 overflow-x-scroll relative items-center p-2 scrollbar-hide' ref={rowRef}>
                    {category.map((image, id) => {
                        return <Vignette imageUrl={category[id].backdrop_path} key={id} />
                    })}

                </div>
            </div>

        </div>
    )
}

export default Row