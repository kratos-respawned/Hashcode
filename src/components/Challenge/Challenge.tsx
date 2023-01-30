import Image from 'next/image'
import React from 'react'
// @ts-ignore
import google from "./google.png";
// @ts-ignore
import ss from "./ss.png";

function Challenge() {
    return (
        <>
            <div className="flex flex-col px-16 py-10">
                <Image src={google} alt="hero" width={324} height={112} quality={100} />
                <div className="flex flex-row justify-between items-center mt-10">
                    <Image src={ss} alt="hero" width={433} height={240} quality={100} />
                    <div className="text-[55px] leading-[80px] font-extrabold text-right -mr-10">
                         The Biggest <br />
                         <span className='text-[#EB4B3D] font-bold tracking-tighter -ml-3'> &#123; </span>
                         <span className='text-[#4286F3] font-bold tracking-tighter -ml-3'> C </span>
                         <span className='text-[#EB4B3D] font-bold tracking-tighter -ml-3'> o </span>
                         <span className='text-[#FBBE04] font-bold tracking-tighter -ml-3'> d </span>
                         <span className='text-[#4286F3] font-bold tracking-tighter -ml-3'> i </span>
                         <span className='text-[#33A951] font-bold tracking-tighter -ml-3'> n </span>
                         <span className='text-[#33A951] font-bold tracking-tighter -ml-3'> g </span>
                         <span className='text-[#EB4B3D] font-bold tracking-tighter -ml-3'> &#125; </span>Challenge Is Back</div>
                </div>
            </div>
        </>
    )
}

export default Challenge