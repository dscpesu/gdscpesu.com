import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
    return (
        <div id="#about" className="relative w-full h-[80vh] lg:h-[60vh]  object-cover flex items-center    bg-[url('/hero-vector.png')]   ">
            <Image src = {'/about_us_arrow.png'} alt = 'about_us_arrow' height={80} width = {80} className = 'absolute  left-16 top-16 hidden md:flex' />
            <div className='absolute -top-9 left-9 md:left-32 -rotate-12 bg-[#8DB6F8] p-[16px] md:p-[32px]'>
                <p className="text-xl md:text-3xl text-white">About Us</p>
            </div>
            <div className="bg-white p-[32px] m-[32px] md:mx-48 relative top-5 md:top-8 lg:top-0 lg:left-16 shadow-lg ">
            <Image src={'/about_us_bulb.png'} alt = 'about-us-bulb' height={120} width = {120} className = 'absolute -top-16 -right-7 '/>
                <p className="text-xl md:text-2xl lg:text-3xl">At GDSC PES University, we are dedicated to fostering a vibrant community centered around open-source technology. Our mission is simple - to nurture a profound appreciation for open-source principles and equip students with the skills needed to excel in the digital era.</p>
            </div>
            <Image src={'/about_us_banner.png'} height = {100} width = {400} alt = 'about_us_banner' className='absolute -bottom-8 right-0 w-[300px]'/>

        </div>
    )
}

export default AboutUs