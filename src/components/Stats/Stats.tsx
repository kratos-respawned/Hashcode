import React from 'react'

function Stats() {
    return (
        <>
            <div className="grid grid-cols-4 py-20 justify-items-center cursor-pointer my-12  font-poppins">
                <div className="relative group w-[230px] h-[260px] mx-5">
                    <div className="absolute top-0 left-0 w-[230px] h-[260px] bg-[#4286f3] flex flex-col justify-end p-3 shadow-card rounded-[15px] rotate-[-10deg] group-hover:rotate-[5deg] opacity-0 group-hover:opacity-100 transition-all delay-100 duration-300"></div>
                    <div className="w-[230px] h-[260px] bg-white flex flex-col justify-end p-3 shadow-card rotate-[-10deg] rounded-[15px] group-hover:rotate-[-5deg] transition-all duration-300">
                        <p className="text-black  font-semibold tracking-[-0.045em] text-[30px] leading-[45px]">1.4 Million <br /> Coders</p>
                    </div>
                </div>
                <div className="relative group w-[230px] h-[260px] mx-5">
                    <div className="absolute top-0 left-0 w-[230px] h-[260px] bg-[#EB4B3D] flex flex-col justify-end p-3 shadow-card rounded-[15px] rotate-[10deg] group-hover:rotate-[-5deg] opacity-0 group-hover:opacity-100 transition-all delay-100 duration-300"></div>
                    <div className="w-[230px] h-[260px] bg-black flex flex-col justify-end p-3 shadow-card rotate-[10deg] rounded-[15px] group-hover:rotate-[5deg] transition-all duration-300">
                        <p className="text-white  font-semibold tracking-[-0.045em] text-[30px] leading-[45px]">1.4 Million <br /> Coders</p>
                    </div>
                </div>
                <div className="relative group w-[230px] h-[260px] mx-5">
                    <div className="absolute top-0 left-0 w-[230px] h-[260px] bg-[#33A951] flex flex-col justify-end p-3 shadow-card rounded-[15px] rotate-[-10deg] group-hover:rotate-[5deg] opacity-0 group-hover:opacity-100 transition-all delay-100 duration-300"></div>
                    <div className="w-[230px] h-[260px] bg-black flex flex-col justify-end p-3 shadow-card rotate-[-10deg] rounded-[15px] group-hover:rotate-[-5deg] transition-all duration-300">
                        <p className="text-white  font-semibold tracking-[-0.045em] text-[30px] leading-[45px]">1.4 Million <br /> Coders</p>
                    </div>
                </div>
                <div className="relative group w-[230px] h-[260px] mx-5">
                    <div className="absolute top-0 left-0 w-[230px] h-[260px] bg-[#FBBE04] flex flex-col justify-end p-3 shadow-card rounded-[15px] rotate-[10deg] group-hover:rotate-[-5deg] opacity-0 group-hover:opacity-100 transition-all delay-100 duration-300"></div>
                    <div className="w-[230px] h-[260px] bg-black flex flex-col justify-end p-3 shadow-card rotate-[10deg] rounded-[15px] group-hover:rotate-[5deg] transition-all duration-300">
                        <p className="text-white  font-semibold tracking-[-0.045em] text-[30px] leading-[45px]">1.4 Million <br /> Coders</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats;