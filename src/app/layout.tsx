import "./globals.css";
import { Poppins, Noto_Sans } from "@next/font/google"
const poppins = Poppins(
  {
    weight: ["300", "400", "500", "600"],

    subsets: ["latin"]
  }
)
const noto_sans = Noto_Sans(
  {
    weight: ["400", "500", "600", "700", "800"],

    subsets: ["latin"]
  }
)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      {/* // variable: "--font-poppins", */}
      {/* // variable: "--font-noto", */}
      {/* ${poppins.variable} ${noto_sans.variable} */}
      <body className={` bg-white h-full`}>
        <main className="max-w-screen-2xl overflow-clip h-full w-full mx-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}
