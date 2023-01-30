import Image from "next/image";
// @ts-ignore
import cu from "./cu.png";
// @ts-ignore
import hs from "./hs.png";
function Navbar() {
  return (
    <header className="  flex justify-between items-center lg:px-28 pt-5  w-full">
      <Image
        src={hs}
        alt="hero"
        width={59}
        height={63}
        quality={100}
        className="aspect-[59/68]"
      />
      <nav className="flex items-center space-x-10  text-white bg-slate-900 bg-opacity-50 w-3/5 min-w-max rounded-full  p-2 mx-auto ">
        <a
          href=""
          className="rounded-full aspect-square text grid place-content-center  p-2 bg-[#2d2b66] "
        >
          {"</>"}
        </a>
        <a href="">Hashcode</a>
        <div className="self-center space-x-4 text-center flex-1 text-gray-400 ">
          <a href="#" className="hover:text-white">
            About
          </a>
          <a href="#" className="hover:text-white">
            Schedule
          </a>
          <a href="#" className="hover:text-white">
            FAQ
          </a>
          <a href="#" className="hover:text-white">
            Rules
          </a>
        </div>
        <button className="bg-white text-black rounded-full  px-4 py-2">
          Get started
        </button>
      </nav>
      <Image src={cu} alt="hero" width={44} height={69} quality={100} />
    </header>
  );
}

export default Navbar;
