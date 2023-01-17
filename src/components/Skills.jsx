import React from 'react'
import html from '../assets/images/html-icon/html.png'
import reactIcon from '../assets/images/react-icon/react.png' 
import jsIcon from '../assets/images/js-icon/js.png'
import cssIcon from '../assets/images/css-icon/cssicons.png'
import tailwindCss from '../assets/images/tailwindcss.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
                    Skills
                </p>
                <p className='py-4'>
                    These are the technologies I work with 
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={reactIcon} alt="HTML icon" />
                    <p>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={jsIcon} alt="HTML icon" />
                    <p>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={cssIcon} alt="HTML icon" />
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwindCss} alt="HTML icon" />
                    <p>TAILWIND</p>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Skills