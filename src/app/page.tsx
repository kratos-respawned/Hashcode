import Challenge from "@/components/Challenge/Challenge";
import Divider from "@/components/Divider/Divider";
import Doubts from "@/components/Doubts/Doubts";
import Faq from "@/components/Faq/Faq";
import Herosection from "@/components/Herosection/Herosection";
import Register from "@/components/Register/Register";
import Schedule from "@/components/Schedule/Schedule";
import Stats from "@/components/Stats/Stats";
import About from "@/components/About/About";
export default function Home() {
  return (
    <>
      <Herosection />
      <section className="px-5 sm:px-20">
        <Challenge />
        <About />
        <Register />
        <Stats />
        <Schedule />
        <Divider />
        <Faq />
        <Doubts />
      </section>
    </>
  );
}
