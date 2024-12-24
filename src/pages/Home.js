import React from "react";
import HomeBanner from "../assets/banners/home_banner.png";
import Banner from "../components/Banner";
import About from "../sections/About";
import Services from "../sections/services";
// import BuildingsSvg from "../assets/buildings.svg";
// import HowItWorks from "../sections/HowItWorks";
import TopRatedUniversities from "../sections/TopRatedUniversities";
import Testimonials from "../sections/Testimonials";
import Events from "../sections/Events";
import Faq from "../sections/Faq";

const Home = () => {
  return (
    <main className="custom_container relative">
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
      {/* <div
        className="absolute top-[25%] left-0 right-0 bottom-0 bg-cover bg-no-repeat bg-center z-[-1] opacity-40 w-screen h-1/2"
        style={{ backgroundImage: `url(${BuildingsSvg})` }}
      /> */}
      <Services />
      {/* <HowItWorks /> */}
      <TopRatedUniversities />
      <Testimonials />
      <Events />
      <Faq />
    </main>
  );
};

export default Home;
