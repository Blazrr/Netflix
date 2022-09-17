import React from 'react'
import Image from 'next/image'
import {FaBell, FaSearch} from 'react-icons/fa'


 
function Header() {


 
   
     

    return (
        <div className='bg-black w-full p-4 lg:p-6 flex transition-all duration-75 items-center justify-between'>
            <div className='flex space-x-2 lg:space-x-6'>
                <div className=' w-20 h-8 relative lg:h-12 lg:w-20'>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'
                        layout='fill' objectFit="contain"  />
                </div>
                
                <ul className='hidden md:flex space-x-2 lg:space-x-4 text-white items-center md:text-[10px] lg:text-sm'>
                    <li className='hoverLi'>Accueil</li>
                    <li className='hoverLi'>Séries</li>
                    <li className='hoverLi'>Films</li>
                    <li className='hoverLi'>Nouveautés les plus regardées</li>
                    <li className='hoverLi'>Ma liste</li>
                    <li className='hoverLi'>Explorer par langue</li>
                </ul>
            </div>

            <div className='flex items-center space-x-4'>
                <FaSearch className='text-white h-6 w-6 '/>
                <h4 className='text-white hoverLi hidden lg:inline-block'>DIRECT</h4>
                <h4 className='text-white hoverLi hidden lg:inline-block'>Jeunesse</h4>
                <FaBell className='text-white h-6 w-6 mb-auto'/>
                <div className='relative h-8 w-8 '>
                <Image src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' 
                layout='fill' className='rounded-md cursor-pointer'  />
                </div>
            </div>

        </div>
    )
}

export default Header