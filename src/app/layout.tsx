import "./globals.css";
import { Poppins, Noto_Sans } from "@next/font/google"
import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "500"],
  subsets: ["latin"]
})
const poppins = Poppins(
  {
    weight: ["300", "400", "500", "600"],
    variable: "--font-poppins",
    subsets: ["latin"]
  }
)
const noto_sans = Noto_Sans(
  {
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-noto",
    subsets: ["latin"]
  }
)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={` ${montserrat.variable} ${poppins.variable} ${noto_sans.variable}  bg-white h-full`}>
        <main className="max-w-screen-2xl overflow-clip h-full w-full mx-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}
