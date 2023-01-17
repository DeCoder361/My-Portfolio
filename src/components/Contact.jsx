import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/c8acc174-e29a-408f-b334-191bec80858b" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Fill the boxes below or shoot me an email at folasadeaanu@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='Name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='Email' />
            <textarea className='bg-[#ccd6f6] p-2' name="Message" id="" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
        </form>

    </div>
  )
}

export default Contact