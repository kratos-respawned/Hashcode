
import { Calendar } from "lucide-react"
import { Switch } from "../ui/switch"

function Schedule() {
    return (
        <section id="schedule" className="font-poppins my-12 py-12">
            <h2 className="text-3xl sm:text-5xl leading-3 text-black/75 flex flex-col items-center lg:flex-row gap-y-5 gap-2">
                <span >
                    2023 Schedule
                </span>
                <span className="text-xl font-thin">Display in local time (GMT+5:30) <Switch className="inline lg:hidden items-end" /></span>
                <Switch className=" self-end hidden lg:block" />

            </h2>
            <p className="bg-gBlue/10 text-base py-4 px-6 my-11 rounded w-fit">Ready to participate in Kick Start? Registration opens on
                <span className="font-bold mx-1">Feb 1 2023, 16:00 (UTC)</span>
                and will remain open until
                <span className="font-bold mx-1">Nov 4 2023, 06:00 (UTC)</span>
                <Calendar className="inline mx-4 text-gBlue" />
            </p>
            <div className="border-l-2 border-gray-600/95 lg:ml-28 ">
                <article className="mx-5 my-5 text-[#505050]">
                    <h3 className=" text-2xl my-3">APR 17,2023</h3>
                    <h3 className="py-2 px-4 bg-gYellow w-fit relative text-white "><span className="absolute w-4 aspect-square bg-gray-600 -left-5 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full" /> Deadline for Online Registration</h3>
                    <p className="ml-3 text-sm my-4 flex gap-x-5"><span className=" text-2xl">1</span> Create a Coding Competitions profile</p>
                    <p className="ml-3 text-sm my-4 flex gap-x-5"><span className=" text-2xl">2</span> Register for Hashcode 2023 Individually</p>
                    <p className="ml-3 text-sm my-4 flex gap-x-5"><span className=" text-2xl">3</span>
                        <span className="inline-flex flex-col max-w-[450px]"> Form a team of 2 to 4 people among yourself, and select AUB HUB under “My Team”</span></p>
                </article>
                <article className="mx-5 my-10  text-[#505050]">
                    <h3 className=" text-2xl my-3">April 30 , 2023</h3>
                    <h3 className="py-2 px-4 bg-gYellow w-fit relative text-white "><span className="absolute w-4 aspect-square bg-gray-600 -left-5 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full" />Online Qualification Round</h3>
                </article>
                <article className="mx-5 my-10 text-[#505050]">
                    <h3 className=" text-2xl my-3">May 10 , 2023</h3>
                    <h3 className="py-2 px-4 bg-gYellow w-fit relative text-white "><span className="absolute w-4 aspect-square bg-gray-600 -left-5 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full" />Results Announcement</h3>

                </article>
                <article className="mx-5 my-10 text-[#505050]">
                    <h3 className=" text-2xl my-3">July 29 , 2023</h3>
                    <h3 className="py-2 px-4 bg-gYellow w-fit relative text-white "><span className="absolute w-4 aspect-square bg-gray-600 -left-5 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full" />World Finals</h3>
                </article>
            </div>
            <div className="lg:w-1/2 min-w-fit my-12">
                <p className="bg-gGreen text-white px-6 py-1 text-lg w-fit lg:ml-auto">For more information visit hashcode.google.com</p>
            </div>



        </section>
    )
}

export default Schedule