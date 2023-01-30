import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white h-full">
        <main className="max-w-screen-2xl overflow-clip h-full w-full mx-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}
