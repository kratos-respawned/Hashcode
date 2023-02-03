import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Poppins } from "@next/font/google"
const poppins = Poppins(
  {
    weight: ["300", "400", "500", "600"],
    variable: "--font-poppins",
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
      <body className={`${poppins.variable} bg-white h-full`}>
        <main className="max-w-screen-2xl overflow-clip h-full w-full mx-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}
