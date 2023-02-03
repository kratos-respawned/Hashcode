import React from 'react'
import Image from "next/image"
import register from "./register.png"
function Register() {
  return (
    <>
      <div className="grid place-items-center  py-40 my-5 relative  font-poppins isolate  ">
        <Image fill alt="background" src={register} className=" object-scale-down  -z-10" />
        <div className="flex flex-col justify-center items-center">
          <p className=" font-bold text-[64px] leading-[86px] tracking-[-4.5%] text-black/75">Register Now</p>
          <p className=" font-normal text-[18px] leading-[25px] tracking-[-0.045em] text-black/75 text-center mt-2">Don’t Miss Out The Oppurtunity <br /> To Be Part Of World’s Largest Hackathon </p>
          <div className="w-[612px] h-[60px] bg-white shadow-white rounded-full flex flex-row justify-end items-center px-1 mt-5">
            <button className='bg-[#404040] text-white  rounded-full grid place-items-center font-semibold text-[12px] tracking-[-0.045em] leading-[17px] w-[107px] h-[47.08px]'>Register Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register