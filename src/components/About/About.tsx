import React from 'react'
import Image from 'next/image'
import img1 from "./img1.png";
import img2 from "./img2.png";
function About() {
    return (
        <>
            <div id='about' className="flex flex-col  md:flex-row justify-between  py-28 font-poppins">
                <div className="flex flex-col  mr-10">
                    <b className='text-[42px] text-center md:text-left'>What's Hash code?</b>
                    <picture className='md:hidden p-4'>
                        <Image src={img1} className="ml-auto" alt="hero" width={350} height={200} />
                        <Image src={img2} className="ml-auto" alt="hero" width={295} height={132} />
                    </picture>
                    <p className='text-black/75 text-[15px] w-full md:max-w-2xl mt-2'>Hash Code is a team programming competition, organized by Google, for students and professionals around the world. You pick your team and programming language and we pick an engineering problem for you to solve. This year's contest kicks off with a Qualification Round, where your team can compete virtually from wherever you'd like, alongside your Hub. Top teams will then be invited to compete from our virtual World Finals.</p>
                    <button className='bg-gBlue mx-auto md:mx-0  w-fit px-6  py-4  text-white grid place-items-center text-base mt-7'>Learn More</button>
                </div>
                <div className=" flex-col hidden md:flex  ">
                    <Image src={img1} alt="hero" width={350} height={200} />
                    <Image src={img2} alt="hero" width={295} height={132} />
                </div>
            </div>
        </>
    )
}

export default About