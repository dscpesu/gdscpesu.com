import React from 'react'
import Image from 'next/image'


const GDSCTitle = () => {
  return (
    <div className="flex flex-col gap-y-7 mx-8 md:ml-16 items-center md:items-start">
      <div className="relative w-fit p-7 flex flex-col md:flex-row gap-y-3 md:gap-x-3   bg-white items-center justify-center">
        <Image src={'/graduation_cap.png'} alt='graduation-cap' height={80} width={80} className='absolute -top-8 -left-5' />
        <Image src={'/gdsc_logo.png'} alt='gdsc-logo-title' height={100} width={100} />
        <h1 className="text-4xl md:text-5xl text-gray-500 text-center">Google Developer Student Clubs</h1>
      </div>
      <div className="p-4 w-fit bg-white relative">
        <p className="text-2xl md:text-[32px] text-gray-500 ">PES University, Bengaluru</p>
        <Image src={'/pin.png'} alt='title-pin' height={30} width={30} className='absolute -bottom-4 -right-4' />
      </div>
    </div>
  )
}


const Hero = () => {
  return (
    <div className="relative w-full h-[100vh] object-cover flex items-center justify-center lg:justify-start    bg-[url('/hero-vector.png')]  ">
      <div className="flex items-center md:justify-normal"><GDSCTitle /></div>
      <div className="absolute -bottom-0 md:-bottom-9 w-full flex items-center justify-center z-40">
        <div className="relative rounded-md bg-[#FFD54F]  h-fit md:w-[700px] p-4 md:p-10 mx-4">
          <Image src={'/paper-clip.png'} alt='paper-clip' height={50} width={50} className='absolute -top-7' />
          <p className="font-bold text-white text-3xl md:text-4xl lg:text-5xl ">Empowering {"Tomorrow's"} Innovators Today.</p>
        </div>
      </div>
      {/* This div is for the arrow and will be seen only in large devices. */}
      <div className="absolute bottom-64 right-72 hidden lg:flex">
        <Image src={'/arrow.png'} alt='arrow' height={120} width={120} className='' />
      </div>
    </div>
  )
}

export default Hero