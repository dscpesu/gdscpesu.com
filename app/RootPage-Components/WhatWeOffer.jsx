import React from 'react'
import Image from 'next/image'
const WhatWeOffer = () => {
    return (
        <div className="relative w-[100vw] h-[100vw] bg-[#F9F9F9]">
            <div className='absolute -top-9 left-9 md:left-32 rotate-12 bg-[#FFD54F] p-[16px] md:p-[32px]'>
                <Image src={'/paper-clip.png'} alt ='pin' height={40} width = {40} className = 'absolute -top-5 left-4 rotate-4' />
                <p className="text-xl md:text-3xl text-white">What We Offer</p>
            </div>
        </div>

    )
}

export default WhatWeOffer