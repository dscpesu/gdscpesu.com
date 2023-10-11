import React from "react";

export default function WhatWeOfferCard(props) {
    let innerDivStyle = {
        borderTop: `12px solid ${props.borderColor}`,
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    };

    let outerDivStyle = {
        borderTop: "2px solid #747678",
        borderLeft: "2px solid #747678"
    }; 

    return(
        <div className={props.divWidth} style={outerDivStyle}>
            <div className="w-full rounded-[10px] overflow-hidden}">
                <div className="">
                    <div className={props.stripClass}>
                    </div>
                    <div className="w-full flex flex-col items-center border border-[#656C73] border-t-0 rounded-b-[10px]">
                        <div className="w-[90%] flex flex-col mt-[20px] mb-[20px] gap-[20px] ">
                            <h4 className="text-[#656C73] text-2xl">{props.heading}</h4>
                            <p className="text-[#000000] text-base">{props.description}</p>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}