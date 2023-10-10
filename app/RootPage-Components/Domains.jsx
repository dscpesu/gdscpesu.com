import React from 'react'
import Image from 'next/image'
import { domainsData } from '@/constants'
import RedDiv from "../../public/domains_icons/red_card.png"
import GreenDiv from "../../public/domains_icons/green_card.png"
import BlueDiv from "../../public/domains_icons/blue_card.png"
import YellowDiv from "../../public/domains_icons/yellow_card.png"
import GreyDiv from "../../public/domains_icons/grey_card.png"


// Current;y the height is 100 viewport tall, change to w-fit during prod
const Domains = () => {

  return (
    <div className="relative w-full h-fit bg-[#F9F9F9]">
      <div className='absolute -top-9 left-9 md:left-32 -rotate-12 bg-[#81C784] p-[16px] md:p-[32px]'>
        <Image src={'/domains_pin.png'} alt='pin' height={40} width={40} className='absolute -top-5 -right-3 rotate-2' />
        <p className="text-xl md:text-3xl text-white">Domains</p>
      </div>
      <div class="w-full flex flex-col items-center mt-[80px]">
        <div class="flex flex-col items-center w-full md:flex-row md:flex-wrap md:justify-between md:items-center md:w-[90%]">
          <div class="w-full flex flex-col items-center mb-[40px] md:w-[407px] md:items-left">
            <h4 class="text-black w-[80%] text-xl">Explore the exciting realms of technology with us :</h4>
          </div>
          <Image class="h-[300px] w-[350px] md:h-[350px] md:w-[400px] mt-[50px]" src={RedDiv} alt="AR/VR" />
          <Image class="h-[300px] w-[350px] md:h-[350px] md:w-[400px] mt-[50px]" src={GreenDiv} alt="Cloud Development" />
          <Image class="h-[350px] w-[350px] md:h-[400px] md:w-[400px] mt-[50px]" src={BlueDiv} alt="AI & ML" />
          <Image class="h-[350px] w-[350px] md:h-[400px] md:w-[400px] mt-[50px]" src={YellowDiv} alt="App Development" />
          <Image class="h-[350px] w-[350px] md:h-[400px] md:w-[400px] mt-[50px]" src={GreyDiv} alt="Web Development" />
          {/* <DomainCard divImg={RedDiv} heading={domainsData[0].heading} description={domainsData[0].description}  />
          <DomainCard divImg={GreenDiv} heading={domainsData[1].heading} description={domainsData[1].description}  />
          <DomainCard divImg={BlueDiv} heading={domainsData[2].heading} description={domainsData[2].description}  />
          <DomainCard divImg={YellowDiv} heading={domainsData[3].heading} description={domainsData[3].description}  />
          <DomainCard divImg={GreyDiv} heading={domainsData[4].heading} description={domainsData[4].description} /> */}
        </div>
      </div>

    </div>
  )
}

export default Domains