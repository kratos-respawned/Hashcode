import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import img from "./hashcode.png";
import dark from "./dark.png"
function Herosection() {
  return (
    <>
      <main className="hero-section isolate">
        <Image src={dark} fill alt="background" className="-z-10 object-cover " />
        <Navbar />
        <figure className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src={img} alt="hero" width={336} height={87} quality={100} />
        </figure>
      </main>
    </>
  );
}

export default Herosection;
