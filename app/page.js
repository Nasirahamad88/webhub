import Image from "next/image";

// import HeroBanner from "./component/Carousel/page";
import Banner1 from '../public/banner/1.png'
import Steps from "./component/Steps/page";
import Contact from "./component/ContactUs/page";
import Footer from "./component/Footer/page";
import Service from "./component/Intro/page";

export default function Home() {
  return (
    <div>
      <div>
        <Image src={Banner1} alt="banner" className=""/>
      </div>
      <div>
        <Service/>
      </div>
      <Steps/>
      <Contact />
     
      <Footer/>
     
    </div>
  );
}
export const dynamic = 'force-dynamic'
