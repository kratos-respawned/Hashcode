import Image from 'next/image'
import React from 'react'
import google from "./google.png";
import ss from "./ss.png";

function Challenge() {
    return (
        <>
            <div className="flex flex-col  py-10 font-poppins">
                <Image src={google} alt="hero" width={324} height={112} quality={100} />
                <div className="flex flex-row justify-between items-center mt-10">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QDIa9PBmX50" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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