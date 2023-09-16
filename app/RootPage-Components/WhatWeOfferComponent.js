import React from 'react'
import Card from './Card'

export const WhatWeOfferComponent = () => {
  return (
    <>
        <div className="flex flex-col items-center">
        <Card heading="Skills Development" 
                description="Dive into the worlds of AI and Machine Learning, create stunning websites with Web
                            Development, develop problem-solving apps, explore immersive AR/VR environments, and
                            harness the potential of Cloud Computing."
                borderColor="#ef2525">
        </Card>

        <Card heading="Engaging Projects" 
                description="We provide hands-on experience through engaging projects and interactive sessions covering AI, Web
                            Development, App Development, AR/VR, and Cloud Computing."
                borderColor="#94999d">
        </Card>

        <Card heading="Community of Developers" 
                description="Beyond just a club, we are a passionate community of student developers. Join GDSC for peer-to-peer
                            learning, collaborative projects, and real-world solutions that make an impact on local business and
                            communities"
                borderColor="#64b5f6">
        </Card>

        <Card heading="Dynamic Events" 
                description="Our dedicated team organizes vibrant workshops, hackathons, speaker sessions, and collaborative
                            initiatives. Excitement is always in the air!"
                borderColor="#ffd54f">
        </Card>

        <Card heading="Innovation Hub" 
                description="We serve as a hub of innovation on campus, where diverse students come together to
                            explore the latest tech trends"
                borderColor="#81c784">
        </Card>
        </div>
    </>
  )
}
