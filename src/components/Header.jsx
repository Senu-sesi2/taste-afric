import React from 'react'

import { Banner1, Banner2, Banner3, Banner4, Banner5 } from '../images';

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

const Header = ({title, image, type}) => {
  return (
    <div>
        <div className="w-full h-[100vh]">
            <img src={image ?? images[Math.floor(Math.random() *
            images.length)]}
            alt='Hero banner'
            className='w-full h-full object-cover'
            />
        </div>

        <div className='absolute w-full h-full
        bg-gradient-to-t from-black to transparent top-0 z-8 flex flex-col
        items-center justify-center pt-40- 2xl:pt-20 px-4'>
            <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>
                {title}
            </h1>
            {
                // type && (
                //     <p className='text-lg mt-4 text-center
                //     text-green-500 bg-[#00000090] px-6 py-4
                //     rounded-full'
                //     >
                //         Explore the rich culinary heritage across 
                //         the African continent
                //             <br className='hidden md:block' />
                //     </p>
                // )
            }
        </div>
    </div>
  )
}

export default Header