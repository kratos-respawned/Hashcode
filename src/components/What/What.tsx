import React from 'react'
import Image from 'next/image'
// @ts-ignore
import img1 from "./img1.png";
// @ts-ignore
import img2 from "./img2.png";
function What() {
    return (
        <>
            <div className="flex flex-row justify-between px-20 py-28 poppins">
                <div className="flex flex-col max-w-[700px] mr-10">
                    <b className='text-[42px]'>What's Hash code?</b>
                    <p className='text-black/75 text-[15px] mt-2'>Hash Code is a team programming competition, organized by Google, for students and professionals around the world. You pick your team and programming language and we pick an engineering problem for you to solve. This year's contest kicks off with a Qualification Round, where your team can compete virtually from wherever you'd like, alongside your Hub. Top teams will then be invited to compete from our virtual World Finals.</p>
                <button className='bg-[#4286F3] w-[158px] h-[54px] text-white grid place-items-center text-[16px] mt-7'>Learn More</button>
                </div>
                <div className="flex- flex-col -mr-10">
                    <Image src={img1} alt="hero" width={350} height={200} quality={100} />
                    <Image src={img2} alt="hero" width={295} height={132} quality={100} />
                </div>
            </div>
        </>
    )
}

export default What