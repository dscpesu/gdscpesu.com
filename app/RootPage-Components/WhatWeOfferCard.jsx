import React from 'react'

function WhatWeOfferCard(props) {
    let innerDivStyle = {
        borderTop: `12px solid ${props.borderColor}`,
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    };

    let outerDivStyle = {
        borderTop: "2px solid #747678",
        borderLeft: "2px solid #747678"
    };  

  return (
    <>
        <div className="my-3 pl-1 pt-2 w-96 h-max border-t-4 rounded-2xl" style={outerDivStyle}>
            <div className="flex p-5 flex-col w-96 rounded-lg border-2"
                    style={innerDivStyle}>
                <div className="text-xl pb-1.5">{props.heading}</div>
                <div className="text-sm">{props.description}</div>
            </div>
        </div>
    </>
  )
}

export default WhatWeOfferCard