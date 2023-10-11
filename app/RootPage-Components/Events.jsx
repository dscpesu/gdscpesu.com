'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const events = [
    {
        eventName: 'Info Session',
        eventSubName: 'GDSC Connect',
        location: 'PES University - Bengaluru',
        date: 'SEP 14, 2023',
        imageURL: '/events/gdsc-connect.png',
        slug: '/gdsc-connect',
    },
    {
        eventName: 'Hackathon',
        eventSubName: 'Datathon 1.0!',
        location: 'PES University - Bengaluru',
        date: 'APR 7, 2023',
        imageURL: '/events/datathon-1.png',
        slug: '/datathon-1',
    },
    {
        eventName: 'Workshop/Study Group',
        eventSubName: 'Portfolio BuildR',
        location: 'PES University - Bengaluru',
        date: 'APR 7, 2023',
        imageURL: '/events/portfolio-buildr.png',
        slug: '/portfolio-buildr',
    },

]

const EventComponent = ({ eventName,
    eventSubName,
    location,
    date,
    slug,
    imageURL
}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <div className="p-[10px] rounded-full border-2 border-gray-200 ">
                <Image src={imageURL} alt='event-image' height={200} width={200} className='rounded-full' />
            </div>
            <div className="flex flex-col items-center justify-evenly gap-3">
                <p className="text-[#656C73]">{date}</p>
                <p className="text-black text-[20px] font-semibold text-center">{eventName}</p>
                <div className="flex flex-col items-center justify-center text-[#656C73]">
                    <p className="text-center">{eventSubName}</p>
                    <p className="text-center">{location}</p>
                </div>
                {/* <Link href={`/events${slug}`}> */}
                    <button disabled className=' bg-[#eaeaea] enabled:hover:bg-[#d5d3d3] enabled:hover:text-gray-600 transition ease-in duration-150 text-[#656C73] p-2 rounded-lg'>View More</button>
                {/* </Link> */}
            </div>
        </div>

    )

}
const Events = () => {
    const pathname = usePathname()
    return (
        <div className={`relative w-full h-fit ${pathname === '/events' && 'mt-[14rem]'}  gap-9` }  id = "events" >
            <div className='absolute -top-9 left-9 md:left-32 -rotate-12 bg-[#8DB6F8] p-[16px] md:p-[32px]'>
                <Image src={'/domains_pin.png'} alt='pin' height={40} width={40} className='absolute -top-5 -right-3 rotate-2' />
                <p className="text-xl md:text-3xl text-white">Events</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center p-16 md:p-32 gap-y-9">
                {events?.map((event, index) => (
                    <EventComponent eventName={event.eventName}
                        eventSubName={event.eventSubName}
                        date={event.date}
                        location={event.location}
                        slug={event.slug}
                        imageURL={event.imageURL}
                        key={index} />
                ))}
            </div>


        </div>
    )
}

export default Events