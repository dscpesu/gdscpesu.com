import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const rotateStyles = [
    'rotate-2', 'rotate-0', 'rotate-2', '-rotate-2', 'rotate-0', '-rotate-2'
]

const TeamMember = ({ memberName, memberPosition, rotationIndex }) => {
    return (
        <div className={`h-[320px] w-[240px] md:h-[380px] md:w-[320px] border-2  rounded-[8px] ${rotateStyles[rotationIndex % rotateStyles.length]}`}>
            <div className="h-[80%] "></div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-[#666666]">{memberName}</p>
                <p className="text-[#BCBCBC]">{memberPosition}</p>
            </div>
        </div>
    )
}

const MeetTheTeam = () => {
    return (
        <div className="relative w-full h-fit bg-[#F9F9F9] px-12">
            <div className='absolute -top-9 left-9 md:left-32 rotate-12 bg-[#E57373] p-[16px] md:p-[32px]'>
                <Image src={'/paper-clip.png'} alt='pin' height={40} width={40} className='absolute -top-5 left-4 rotate-4' />
                <p className="text-xl md:text-3xl text-white">Meet The Team</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-36 gap-12">
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={0} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={1} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={2} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={3} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={4} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={5} />
                <TeamMember />
            </div>
            <div className="w-full  h-9 relative ">
                <Link href={'/team'}>
                    <div className='absolute right-2 -rotate-12 border-2 border-gray-500 p-[9px] cursor-pointer '>
                        <Image src={'/domains_pin.png'} alt='pin' height={20} width={20} className='absolute -top-2 -right-3 rotate-2 z-100' />
                        <p className="text-xl text-gray-500">View More</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default MeetTheTeam