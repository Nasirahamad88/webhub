import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WebHub - Elevating Digital Excellence",
  description: "Welcome to WebHub, your gateway to digital brilliance! We specialize in web development, WordPress solutions, SEO, graphic design, and social media management. Our dedicated team crafts tailored solutions to redefine your digital presence and drive success. Experience excellence with WebHub!"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div >
          <Navbar/>
        {children}
        </div>
        
      </body>
    </html>
  );
}
