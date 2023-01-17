import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-[#0a192f]'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-blue-600'>Hi, my name is</p>
            <h1 className='text-4l sm:text-7xl font-bold text-white'>Aanuoluwani Olayanju</h1>
            <h2 className='text-4l sm:text-7xl font-bold text-[#8892b0]'>I am a Frontend Software Developer.</h2>
            <p className='text-[#8892b0] py-4 mx-w-[700px]'>I am a Frontend Software Developer aspiring to work with reputable tech companies in the world. I build websites and applications using various technologies. I love to see my developments come to life in beautiful, responsive and functional ways.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'> View work <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'></HiArrowNarrowRight>
                </span>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Hero