import React from "react";
import aboutBanner from "../assets/banners/about_banner.png"
import MainHeader from "../../src/constants/header"
import SubHeader from "../constants/sub";
import WhoWeAreImg from "../assets/undraw_work-time_zbsw 1.png"
import Description from "../constants/description";
import svg from "../assets/XMLID_7529_.svg"

const AboutUs = () => {
  return (
    <div>
    <div
    className="relative bg-cover bg-center text-white p-5 md:p-10 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto h-80 md:h-[621px]"
    style={{ backgroundImage: `url(${aboutBanner})` }}
  >


        <div className="relative text-center space-y-4">
          <MainHeader title="About Us" className="text-4xl font-bold" />
          <p className="text-[18px] w-[1014px] h-[44px] absolute left-[206px] opacity-100 font-poppins font-medium leading-[21.6px] tracking-[-0.03em] text-center decoration-skip-ink">
            We are dedicated to helping students turn their dreams of studying abroad into reality. With expert guidance and comprehensive support, we simplify every step of the journey to renowned global institutions.
          </p>
        </div>
      </div>
      <section className="py-10 px-5 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gray-400 text-2xl md:text-3xl">01</span>
            <br />
            {/* Who We Are.? */}
            <SubHeader title="Who We Are.?" />
          </h2>
          {/* <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Choose Masters Visa Abroad Education Consultants for your path to
            success! Our dedicated team provides personalized guidance to
            simplify the complex process of pursuing advanced studies overseas.
            From university selection to visa processing and seamless
            transitions, we offer expert advice tailored to your academic
            goals. Beyond conventional consultancy services, we ensure
            comprehensive support and unwavering commitment to your success.
            Trust our proven track record in shaping successful global academic
            journeys. Your aspirations, our expertise – the perfect combination
            for achieving your dreams.
          </p> */}
          <Description text="Choose Masters Visa Abroad Education Consultants for your path to
            success! Our dedicated team provides personalized guidance to
            simplify the complex process of pursuing advanced studies overseas.
            From university selection to visa processing and seamless
            transitions, we offer expert advice tailored to your academic
            goals. Beyond conventional consultancy services, we ensure
            comprehensive support and unwavering commitment to your success.
            Trust our proven track record in shaping successful global academic
            journeys. Your aspirations, our expertise – the perfect combination
            for achieving your dreams." className="text-base md:text-lg leading-relaxed"/>
        </div>
        {/* Illustration Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={WhoWeAreImg}
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
    {/*<div class="bg-no-repeat bg-cover h-screen w-full sm:bg-contain sm:bg-center md:bg-fixed lg:bg-top absolute z-[-1]"> */}
      <img 
      src={svg}  className="opacity-20"/>
      
</div>

// </div>
  );
  
};

export default AboutUs;


