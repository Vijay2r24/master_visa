import React from "react";
import HomeBanner from "../assets/banners/home_banner.png";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import AboutImg from "../assets/about.png";
import CountUp from "react-countup"; // Import CountUp
import { ReactCountUp } from "../constants"; // Import ReactCountUp from constants
import boxIcon1 from "../assets/boxIcones/Icon.png"
const Home = () => {
  return (
    <main className="lg:px-9 xl:px-24 w-full">
      {/* Banner */}
      <div>
        <div className="px-4 md:px-8">
          <Banner
            imageSrc={HomeBanner}
            title={"Turn your Study abroad Dreams into reality"}
            linkHref={"/courses"}
            linkText={"Explore Now"}
            subtitle={
              "Transforming Aspirations into International Achievements"
            }
          />
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-4 md:py-12 lg:py-20">
        <Heading number={"01"} text={"About Us"} />

        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          {/* Left Section (Text) */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
              Choose Masters Visa Abroad Education Consultants for your path to
              success! Our dedicated team provides personalized guidance to
              simplify the complex process of pursuing advanced studies
              overseas. From university selection to visa processing and
              seamless transitions, we offer expert advice tailored to your
              academic goals. Beyond conventional consultancy services, we
              ensure comprehensive support and unwavering commitment to your
              success. Trust our proven track record in shaping successful
              global academic journeys. Your aspirations, our expertise – the
              perfect combination for achieving your dreams.
            </p>

            <div className="mt-8">
              {/* CountUp Section */}
              <div className="w-[517px] h-[318px] bg-white flex justify-center items-center text-center">
                {/* CountUp Section - Flex Wrap for 4 Boxes */}
                <div className="flex flex-wrap justify-between gap-6">
                  {ReactCountUp.map((item, index) => (
                    <div
                      key={index}
                      className="w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center"
                    >
                      <div className="flex items-center justify-center mb-4">
                        {/* Icon */}
                        <div className="mr-2">{item.icon}</div>
                        {/* CountUp */}
                        <h3 className="text-3xl font-semibold text-gray-700">
                          <CountUp
                            start={0}
                            end={item.count}
                            duration={2.5}
                            separator=","
                          />
                        </h3>
                      </div>
                      <p className="text-lg text-gray-500">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="mt-8 md:mt-0 w-full md:w-1/2 text-center md:text-right">
            <img
              src={AboutImg}
              alt="About Us"
              className="w-full h-auto object-cover md:max-w-none mx-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
