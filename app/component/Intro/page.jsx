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

const Service = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      
      <div className="container mx-auto">
         <GraphSection  />

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
            icon={
              <SiTailwindcss size={72} />

            }
          />
          <ServiceCard
            title="100+ Components"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <CgComponents size={72} />

            }
          />
          <ServiceCard
            title="Speed Optimized"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <BsSpeedometer size={72} />

            }
          />
          <ServiceCard
            title="Fully Customizable"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <MdOutlineBatteryChargingFull size={72} />

            }
          />
          <ServiceCard
            title="Regular Updates"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <TbIrregularPolyhedronPlus size={72} />

            }
          />
          <ServiceCard
             title="Creative Design Solutions"
              details="Unlock the power of visual communication with our creative design solutions. From captivating logos to stunning graphics, we bring your ideas to life with precision and flair."
            icon={
              <SiCodesignal size={72} />

            }
          />
          <ServiceCard
            title="Social Media Management"
            details="Let us handle your social media presence while you focus on your core business. Our expert team will develop and execute tailored social media strategies to enhance your brand visibility, engage your audience, and drive conversions."
            icon={
              <SiSocialblade size={72} />

            }
          />
          <ServiceCard
            title="Optimized Solutions"
            details="Unlock the potential of your online presence with our tailored SEO strategies. We specialize in optimizing websites to boost visibility, attract organic traffic, and drive conversions. Partner with us to elevate your digital footprint and achieve sustainable growth."
            icon={
              <TbSeo size={72} />

            }
          />
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
