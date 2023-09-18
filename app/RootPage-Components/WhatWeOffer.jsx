import React from 'react'
import Image from 'next/image'
import WhatWeOfferCard from './WhatWeOfferCard'
import { whatWeOfferData } from '@/constants'
import AstronautImage from "../../public/astronautimg.png";

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
            <div class="h-full w-full flex flex-col items-center justify-center md:relative">
                <div class="h-auto w-auto hidden md:absolute md:block">
                    <Image src={AstronautImage} alt="astronaut" />
                </div>
                <div class="w-full flex flex-col items-center mt-[100px] gap-[50px] md:relative md:block md:gap-[0px] md:h-[800px]">
                    <WhatWeOfferCard stripClass="bg-[#E57373] h-[24px] w-full rounded-t-[10px]" divWidth="w-[80%] my-1 pl-2 pt-3 border-t-4 rounded-2xl md:w-[474px] md:absolute md:top-[40px] md:left-[7%]" heading={whatWeOfferData[0].heading} description={whatWeOfferData[0].description} />
                    <WhatWeOfferCard stripClass="bg-[#656C73] h-[24px] w-full rounded-t-[10px]" divWidth="w-[80%] my-1 pl-2 pt-3 border-t-4 rounded-2xl md:w-[474px] md:absolute md:top-0 md:right-[7%]" heading={whatWeOfferData[1].heading} description={whatWeOfferData[1].description} />
                    <WhatWeOfferCard stripClass="bg-[#64B5F6] h-[24px] w-full rounded-t-[10px]" divWidth="w-[80%] my-1 pl-2 pt-3 border-t-4 rounded-2xl md:w-[492px] md:absolute md:bottom-[180px] md:left-[4%]" heading={whatWeOfferData[2].heading} description={whatWeOfferData[2].description} />
                    <WhatWeOfferCard stripClass="bg-[#81C784] h-[24px] w-full rounded-t-[10px]" divWidth="w-[80%] my-1 pl-2 pt-3 border-t-4 rounded-2xl md:w-[364px] md:absolute md:bottom-[280px] md:right-[4%]" heading={whatWeOfferData[3].heading} description={whatWeOfferData[3].description} />
                    <WhatWeOfferCard stripClass="bg-[#FFD54F] h-[24px] w-full rounded-t-[10px]" divWidth="w-[80%] my-1 pl-2 pt-3 border-t-4 rounded-2xl md:w-[421px] md:absolute md:bottom-[10px] right-[25%]" heading={whatWeOfferData[4].heading} description={whatWeOfferData[4].description} />
                </div>
            </div>

        </div>

    )
}

export default WhatWeOffer