import Challenge from "@/components/Challenge/Challenge";
import Herosection from "@/components/Herosection/Herosection";
import Register from "@/components/Register/Register";
import What from "@/components/What/What";

export default function Home() {
  return (
    <>
      <Herosection />
      <Challenge/>
      <What/>
      <Register/>
    </>
  );
}
