import React from "react";
import HomeBanner from "../assets/banners/home_banner.png";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import AboutImg from "../assets/about.png";
import CountUp from "react-countup"; // Import CountUp
import { ReactCountUp } from "../constants"; // Import ReactCountUp from constants
const Home = () => {
  return (
    <main className="lg:px-9 xl:px-32 w-full">
      {/* Banner */}
      <div>
        <div className="px-4 ">
          <Banner
            imageSrc={HomeBanner}
            title={"Turn your Study abroad Dreams into reality"}
            linkHref={"/courses"}
            linkText={"Start your Journey"}
            subtitle={
              "Transforming Aspirations into International Achievements"
            }
          />
        </div>
      </div>

      {/* About Us Section */}
      <About />

      {/* Services Section */}
      <Services />
    </main>
  );
};

export default Home;
