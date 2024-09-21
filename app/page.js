import Image from "next/image";


import Banner1 from '../public/banner/1.png'
import Steps from "./component/Steps/page";


import Service from "./component/Intro/page";
import PastProjectsPage from "./pastProjectsPage/page";
import Contact from "./contact/page";
import Hero from "./component/Hero/page";

export const metadata = {
  title: "Affordable & Professional Small Business Website Design Services | Burlington Packages",
  description: " Looking for affordable small business website design services? Our professional team offers cost-effective website design packages tailored for small businesses.",
};

export default function Home() {
  return (
    <div>
      <div className="w-auto mt-8 lg:w-auto" > 
        {/* <Image src={Banner1} alt="banner" className=" "/>
         */}
        <Hero/>
      </div>
      <div>
        <Service/>
      </div>
      <Steps />
      <PastProjectsPage/>
      
      <Contact/>
     
      
      
    </div>
  );
}
