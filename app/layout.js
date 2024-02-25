import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

import Navbar from "./component/Navbar/page";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./component/Footer/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WebHub - Elevating Digital Excellence",
  description: " Webhubdev, WordPress, SEO, design, social media.  Tailored solutions for your digital dominance.  Experience WebHub excellence! #webdev #SEO #design #digitalmarketing",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div >
          <Navbar/>
          {children}
          <Footer/>
          <SpeedInsights />
                  <Analytics />

        </div>
        
      </body>
    </html>
  );
}
