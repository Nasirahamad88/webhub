import React from "react";
import GraphSection from "../Graparrow/page";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { CgComponents } from "react-icons/cg";
import { BsSpeedometer } from "react-icons/bs";
import { MdOutlineBatteryChargingFull } from "react-icons/md";
import { TbIrregularPolyhedronPlus } from "react-icons/tb";
import { TbSeo } from "react-icons/tb";
import { SiSocialblade } from "react-icons/si";
import { SiCodesignal } from "react-icons/si";
import Link from "next/link";
import PastProjectsPage from "@/app/pastProjectsPage/page";

const Service = () => {
  return (
    <section className="bg-black">
      <div className="relative w-full sm:w-[30%] py-10 ">
        <div className="absolute inset-x-auto top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xs w-full sm:w-1/2">
          <div className="bg-primary text-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 ">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 animate-pulse text-center">
                1 Year Free Support!
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-6 text-center">
                Get{" "}
                <span className="text-yellow-400 font-semibold">20% OFF</span>{" "}
                when you refer
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://wa.me/8801759277464"
                  target="_blank"
                  className="bg-white text-primary font-bold py-2 px-4 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
                >
                  Get a Meeting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
<PastProjectsPage/>
      <div className="pb-12 pt-20 dark:bg-dark bg-white lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <GraphSection />

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block font-semibold text-primary text-3xl">
                  Our Services
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <ServiceCard
              title="Refreshing Design"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
              icon={<SiInteractiondesignfoundation size={72} />}
            />
            <ServiceCard
              title="Based on Tailwind CSS"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
              icon={<SiTailwindcss size={72} />}
            />
            <ServiceCard
              title="100+ Components"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
              icon={<CgComponents size={72} />}
            />
            <ServiceCard
              title="Speed Optimized"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
              icon={<BsSpeedometer size={72} />}
            />
            <ServiceCard
              title="Fully Customizable"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
              icon={<MdOutlineBatteryChargingFull size={72} />}
            />
            <ServiceCard
              title="Regular Updates"
              details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
              icon={<TbIrregularPolyhedronPlus size={72} />}
            />
            <ServiceCard
              title="Creative Design Solutions"
              details="Unlock the power of visual communication with our creative design solutions. From captivating logos to stunning graphics, we bring your ideas to life with precision and flair."
              icon={<SiCodesignal size={72} />}
            />
            <ServiceCard
              title="Social Media Management"
              details="Let us handle your social media presence while you focus on your core business. Our expert team will develop and execute tailored social media strategies to enhance your brand visibility, engage your audience, and drive conversions."
              icon={<SiSocialblade size={72} />}
            />
            <ServiceCard
              title="Optimized Solutions"
              details="Unlock the potential of your online presence with our tailored SEO strategies. We specialize in optimizing websites to boost visibility, attract organic traffic, and drive conversions. Partner with us to elevate your digital footprint and achieve sustainable growth."
              icon={<TbSeo size={72} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
