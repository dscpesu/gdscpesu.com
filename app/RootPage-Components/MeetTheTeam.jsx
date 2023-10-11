import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { domainLeads } from '@/constants'

//IN THE DIV WITH TEAM MEMBERS AS AGRID, ADD memberPhoto prop and pass in the src for members.
// DO THIS VIA EITHER CONSTANTS (define a json object with team members.) or a json object here
const rotateStyles = [
    'rotate-2', 'rotate-0', 'rotate-2', '-rotate-2', 'rotate-0', '-rotate-2'
]
let rotationIndex=0;

const TeamMember = ({ memberName, memberPosition, rotationIndex, memberPhoto }) => {
    return (
        <div className={`h-[320px] w-[240px] md:h-[380px] md:w-[320px] border-2  rounded-[8px] ${rotateStyles[rotationIndex % rotateStyles.length]}`}>
            <div className="h-[80%] flex items-center justify-center">
				{/*<div className="bg-gray-200 h-[190px] w-[200px] md:h-[251px] md:w-[261px] shadow-md rounded-md"/>*/}
                <Image src={memberPhoto} alt = {memberName} height = {251} width = {261} className = 'h-[190px] w-[200px] md:h-[251px] md:w-[261px] shadow-md rounded-md'/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-[#666666]">{memberName}</p>
                <p className="text-[#BCBCBC]">{memberPosition}</p>
            </div>
        </div>
    )
}

const TeamMembers = () => {
	return (
		<div className="grid grid-cols-7 overflow-x-scroll my-32 p-5 md:p-10  flex-shrink-0 gap-x-[24rem] md:gap-x-[30rem] gap-y-32">
			{domainLeads.map((domainLead, index)=>{
				if(rotationIndex!=5){
					rotationIndex++;
				}else{
					rotationIndex=0;
				}
				return <TeamMember key={index.toString()} memberName={domainLead.name} memberPosition={domainLead.role}  rotationIndex={rotationIndex} memberPhoto={domainLead.imageSRC}/>;
			})}
		</div>
	)
}

const MeetTheTeam = () => {
    return (
        <div className="relative w-full h-fit bg-[#F9F9F9] px-12" id = "team">
            <div className='absolute -top-9 left-9 md:left-32 rotate-12 bg-[#E57373] p-[16px] md:p-[32px]'>
                <Image src={'/paper-clip.png'} alt='pin' height={40} width={40} className='absolute -top-5 left-4 rotate-4' />
                <p className="text-xl md:text-3xl text-white">Meet The Team</p>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-36 gap-12">
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={0} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={1} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={2} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={3} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={4} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={5} />
                <TeamMember />
            </div> */}
			{/*<div className="grid grid-cols-9 overflow-x-scroll my-32 p-5 md:p-10  flex-shrink-0 gap-x-[24rem] md:gap-x-[30rem] gap-y-32   ">
                <TeamMember memberName={domainLeads[0].name} memberPosition={domainLeads[0].role}  rotationIndex={0} memberPhoto={domainLeads[0].imageSRC}/>
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={1}  />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={2} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={3} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={4} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={5} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={0} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={1} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={2} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={3} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={4} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={5} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={5} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={0} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={1} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={2} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={3} />
                <TeamMember memberName={"John Doe"} memberPosition={"Domain Lead"} rotationIndex={4} /> 
			</div>*/}
			<TeamMembers/>
            <div className="w-full  h-9 relative ">
                {/* <Link href={'/team'}> */}
                    <div className='absolute right-2 -rotate-12 border-2 border-gray-500 p-[9px]  '>
                        <Image src={'/domains_pin.png'} alt='pin' height={20} width={20} className='absolute -top-2 -right-3 rotate-2 z-100' />
                        <p className="text-xl text-gray-500">View More</p>
                    </div>
                {/* </Link> */}

            </div>
        </div>
    )
}

export default MeetTheTeam
