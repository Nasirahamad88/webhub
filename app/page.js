import Image from "next/image";


import Banner1 from '../public/banner/1.png'
import Steps from "./component/Steps/page";
import Contact from "./component/ContactUs/page";

import Service from "./component/Intro/page";

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
