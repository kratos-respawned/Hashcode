import Challenge from "@/components/Challenge/Challenge";
import Divider from "@/components/Divider/Divider";
import Doubts from "@/components/Doubts/Doubts";
import Faq from "@/components/Faq/Faq";
import Herosection from "@/components/Herosection/Herosection";
import Register from "@/components/Register/Register";
import Stats from "@/components/Stats/Stats";
import What from "@/components/What/What";

export default function Home() {
  return (
    <>
      <Herosection />
      <Challenge />
      <What />
      <Register />
      <Divider />
      <Stats />
      <Faq />
      <Doubts />
    </>
  );
}
