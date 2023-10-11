import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const footerElements = [
    {
        footerElementName: 'About Us',
        link: '#about'
    },
    {
        footerElementName: 'Domains',
        link: '#domains'
    },
    {
        footerElementName: 'Team',
        link: '#team'
    },
    {
        footerElementName: 'Projects',
        link: '/'
    },
    {
        footerElementName: 'Contact Us',
        link: '/'
    }
]
const footerIcons = [
    {
        footerIconSourcePath: '/footer_icons/whatsapp.png',
        footerIconAlt: 'whatsapp',
        footerIconLink: 'https://chat.whatsapp.com/IHvpmXAMptz7AiDoJM4UJN',
    },
    {
        footerIconSourcePath: '/footer_icons/instagram.png',
        footerIconAlt: 'instagram',
        footerIconLink: 'https://www.instagram.com/gdscpesu.rr',
    },
    {
        footerIconSourcePath: '/footer_icons/linkedin.png',
        footerIconAlt: 'linkedin',
        footerIconLink: 'https://www.linkedin.com/company/dscpesu',
    },
    {
        footerIconSourcePath: '/footer_icons/discord.png',
        footerIconAlt: 'discord',
        footerIconLink: '/',
    },
    {
        footerIconSourcePath: '/footer_icons/github.png',
        footerIconAlt: 'github',
        footerIconLink: 'https://github.com/dscpesu',
    },
]
const GDSCFooterTitle = () => {
    return (
        <div className="flex flex-col gap-y-7 mx-8  items-center md:items-start">
            <div className="relative w-fit p-4 flex flex-col md:flex-row gap-y-3 md:gap-x-3   bg-white items-center justify-center">
                <Image src={'/gdsc_logo.png'} alt='gdsc-logo-title' height={70} width={70} />
                <h1 className="text-2xl md:text-3xl text-gray-500 text-center">Google Developer Student Clubs</h1>
            </div>

        </div>
    )
}


const Footer = () => {
    return (
        <div className="relative w-full h-[50vh] md:h-[40vh] object-cover flex flex-col gap-3 items-center justify-center  bg-[url('/hero-vector.png')] py-12  ">
            <div className="flex items-center justify-center"><GDSCFooterTitle /></div>
            <div className="w-[100%] flex flex-row flex-wrap items-center justify-center gap-x-12 md:gap-x-24 gap-y-3 p-6 ">
                {
                    footerElements?.map((footerElement, index) => (
                        <Link href={footerElement.link} key={index}>
                            <p className="text-[15px] md:text-[20px] text-[#656C73] hover:text-[#323131]  transition ease-in duration-100">{footerElement.footerElementName}</p>
                        </Link>
                    ))
                }
            </div>
            <div className="w-[100%] flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-6  ">
                {
                    footerIcons?.map((footerIcon, index) => (
                        <Link href={footerIcon.footerIconLink} key={index}>
                            <Image src={footerIcon.footerIconSourcePath} alt={footerIcon.footerIconAlt} height={25} width={25} />
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default Footer