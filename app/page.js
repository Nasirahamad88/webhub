import Image from "next/image";


import Banner1 from '../public/banner/1.png'
import Steps from "./component/Steps/page";
import Contact from "./component/ContactUs/page";

import Service from "./component/Intro/page";

export const metadata = {
  title: "WebHub - Elevating Digital Excellence",
  description: " Web dev, WordPress, SEO, design, social media.  Tailored solutions for your digital dominance.  Experience WebHub excellence! #webdev #SEO #design #digitalmarketing",
};

export default function Home() {
  return (
    <div>
      <div className="w-auto mt-8 lg:w-auto" > 
        <Image src={Banner1} alt="banner" className=" "/>
      </div>
      <div>
        <Service/>
      </div>
      <Steps/>
      <Contact />
     
      
      
    </div>
  );
}
