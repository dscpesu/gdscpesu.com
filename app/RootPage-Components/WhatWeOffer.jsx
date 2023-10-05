import React from 'react'
import Image from 'next/image'
import WhatWeOfferCard from './WhatWeOfferCard'
import { whatWeOfferData } from '@/constants'
import AstronautImg from "../../public/astronaut.png";
import ArrowImg from "../../public/whatweoffer_arrow.png";

const WhatWeOffer = () => {
    return (
        <div className="relative w-full bg-[#F9F9F9]">
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
            <div class="h-full w-full flex flex-col items-center justify-center md:relative pt-[100px]">
                <div class="w-full flex flex-col items-center mt-[100px] gap-[50px] md:relative md:grid md:grid-cols-3 md:grid-rows-2 md:w-[80%] md:gap-[40px]">
                    <WhatWeOfferCard stripClass="bg-[#E57373] h-[24px] w-full rounded-t-[10px]" divWidth="w-[80%] my-1 pl-2 pt-3 border-t-4 rounded-2xl md:w-[100%]" heading={whatWeOfferData[0].heading} description={whatWeOfferData[0].description} />
                    <WhatWeOfferCard stripClass="bg-[#656C73] h-[24px] w-full rounded-t-[10px]" divWidth="w-[80%] my-1 pl-2 pt-3 border-t-4 rounded-2xl md:w-[100%]" heading={whatWeOfferData[1].heading} description={whatWeOfferData[1].description} />
                    <Image src={AstronautImg} alt="Astronaut" class="hidden md:block md:absolute md:top-0 md:left-[60%] md:top-[-20%] md:h-[283px] md:w-[283px]" />
                    <div class="hidden md:w-[100%] md:block md:relative">
                        <Image class="w-[203px] h-[176px] md:ml-[50px] md:mt-[50px]" src={ArrowImg} alt="arrow" />
                    </div>
                    <WhatWeOfferCard stripClass="bg-[#64B5F6] h-[24px] w-full rounded-t-[10px]" divWidth="w-[80%] my-1 pl-2 pt-3 border-t-4 rounded-2xl md:w-[100%]" heading={whatWeOfferData[2].heading} description={whatWeOfferData[2].description} />
                    <WhatWeOfferCard stripClass="bg-[#81C784] h-[24px] w-full rounded-t-[10px]" divWidth="w-[80%] my-1 pl-2 pt-3 border-t-4 rounded-2xl md:w-[100%]" heading={whatWeOfferData[3].heading} description={whatWeOfferData[3].description} />
                    <WhatWeOfferCard stripClass="bg-[#FFD54F] h-[24px] w-full rounded-t-[10px]" divWidth="w-[80%] my-1 pl-2 pt-3 border-t-4 rounded-2xl md:w-[100%]" heading={whatWeOfferData[4].heading} description={whatWeOfferData[4].description} />
                </div>
            </div>

        </div>

    )
}

export default WhatWeOffer