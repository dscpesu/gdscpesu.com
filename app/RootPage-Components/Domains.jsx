import React from 'react'
import Image from 'next/image'

// Current;y the height is 100 viewport tall, change to w-fit during prod
const Domains = () => {

  return (
    <div className="relative w-full h-[100vw] bg-[#F9F9F9]">
            <div className='absolute -top-9 left-9 md:left-32 -rotate-12 bg-[#81C784] p-[16px] md:p-[32px]'>
                <Image src={'/domains_pin.png'} alt='pin' height={40} width={40} className='absolute -top-5 -right-3 rotate-2' />
                <p className="text-xl md:text-3xl text-white">Domains</p>
            </div>


        </div>
  )
}

export default Domains