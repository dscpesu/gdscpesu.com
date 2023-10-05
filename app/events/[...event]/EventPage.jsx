import React from 'react'
import Image from 'next/image'
const EventPage = (props) => {
    console.log(props)
    return (
        <div className="relative w-full h-[50vh] md:mt-24 object-cover flex items-center justify-center lg:justify-start bg-[url('/hero-vector.png')]  ">
            <div className="flex flex-row items-center justify-center w-[100%] px-3 md:px-32">
                <Image src={props.bannerIcon} alt="banner-icon" height={300} width={300} className = 'h-[140px] w-[140px] md:h-[300px] md:w-[300px] '/>
                <div className="bg-white h-[100%]  flex flex-col items-start justify-center gap-2 px-2  ">
                    <div className="">
                        <h1 className="text-3xl md:text-6xl">{props.eventName}</h1>
                        <p className="">{props.eventType}</p>
                    </div>
                    <div className="md:flex flex-row items-center justify-start gap-4 hidden  flex-wrap">{props.tags.map((tag, index) => (<span key={index} className='border-2 border-gray-500 text-gray-500 p-2 text-xs rounded-full'>{tag}</span>))}</div>
                    <div className='text-gray-400 text-xs md:text-lg'>
                        <p className="">{props.dateAndTime}</p>
                        <p className="">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventPage