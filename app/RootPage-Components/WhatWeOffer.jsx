import React from 'react'
import Image from 'next/image'
import { WhatWeOfferCard } from '.'
import { whatWeOfferData } from '@/constants'
const WhatWeOffer = () => {
    return (
        <div className="relative w-full h-[100vw] bg-[#F9F9F9]">
            <div className='absolute -top-9 left-9 md:left-32 rotate-12 bg-[#FFD54F] p-[16px] md:p-[32px]'>
                <Image src={'/paper-clip.png'} alt='pin' height={40} width={40} className='absolute -top-5 left-4 rotate-4' />
                <p className="text-xl md:text-3xl text-white">What We Offer</p>
            </div>
            {/* <div className="grid grid-cols-1  lg:grid-cols-3  ">
                {
                    whatWeOfferData?.map((whatWeOfferDataItem, index) => (
                        <WhatWeOfferCard heading={whatWeOfferDataItem.heading} description={whatWeOfferDataItem.description} borderColor={whatWeOfferDataItem.borderColor} key={index} />
                    ))
                }
            </div> */}


        </div>

    )
}

export default WhatWeOffer