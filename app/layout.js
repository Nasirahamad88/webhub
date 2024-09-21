import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

import Navbar from "./component/Navbar/page";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./component/Footer/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Affordable Small Business Website Design | Professional Web Solutions for Your Business",
  description: " Looking for affordable small business website design services? Our professional team offers cost-effective website design packages tailored for small businesses.",
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
