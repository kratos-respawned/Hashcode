import Image from "next/image";
import React from "react";
import google from "./google.png";
import ss from "./ss.png";

function Challenge() {
    return (
        <>
            <div className="flex flex-col  py-10 font-poppins">
                <Image src={google} alt="hero" width={324} height={112} quality={100} />
                <div className="flex flex-col gap-y-2 md:gap-0 md:flex-row justify-between items-center mt-10">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/QDIa9PBmX50"
                        title="YouTube video player"
                        className="w-full  md:w-[560px] md:h-[315px]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <div className="text-[55px] leading-[80px] font-extrabold text-right md:-mr-10">
                        The Biggest <br />
                        <span className="text-[#EB4B3D] font-bold tracking-tighter ">
                            {" "}
                            &#123;
                        </span>
                        <span className="text-[#4286F3] font-bold tracking-tighter ">
                            {" "}
                            C
                        </span>
                        <span className="text-[#EB4B3D] font-bold tracking-tighter ">
                            o
                        </span>
                        <span className="text-[#FBBE04] font-bold tracking-tighter ">
                            d
                        </span>
                        <span className="text-[#4286F3] font-bold tracking-tighter ">
                            i
                        </span>
                        <span className="text-[#33A951] font-bold tracking-tighter ">
                            n
                        </span>
                        <span className="text-[#33A951] font-bold tracking-tighter ">
                            g
                        </span>
                        <span className="text-[#EB4B3D] font-bold tracking-tighter ">
                            &#125;
                            {" "}
                        </span>
                        Challenge Is Back
                    </div>
                </div>
            </div>
        </>
    );
}

export default Challenge;
