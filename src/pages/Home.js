import React from "react";
import HomeBanner from "../assets/banners/home_banner.png";
import Banner from "../components/Banner";
import About from "../sections/About";
import Services from "../sections/services";

const Home = () => {
  return (
    <main className="custom_container">
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
