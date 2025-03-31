import { Link } from 'react-router-dom'; 
import Commitment from "../components/Commitment";
import ServiceType from '../components/ServiceType';
import CompanyWorkProcess from "../components/CompanyWorkProcess";
import Global from "../components/Global";
import WhyChooseUs from "../components/WhyChooseUs";
import HeroSection from "../components/HeroSection";
import ContactInfo from "../components/ContactInfo";

function Home() {
  return (
    <div id="home" className="relative">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/HeroImage.jpg"
          alt="Hero"
          className="absolute  w-full h-full  object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-10 lg:px-16">
          <h1 className="text-white font-bold leading-tight max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:text-6xl text-2xl xl:mx-[60px]">
            <span className="text-[#003366] block xl:text-6xl text-2xl">
              Affordable Big IT
            </span>
            & Technology Solutions
          </h1>

          <p className="text-gray-200 mt-4 max-w-[90%] sm:max-w-[80%] md:max-w-[60%] xl:mx-[60px]">
            At Gold Pack Ltd, we provide innovative IT solutions that empower businesses and institutions.
            Our services include IT product sales, cybersecurity, cloud solutions, and network infrastructure.
          </p>

          {/* Button */}
          <Link to="/contact">
            <button className="mt-6 bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition xl:mx-[60px]">
              Get A Quote
            </button>
          </Link>
        </div>
      </div>
      <Commitment />
      <CompanyWorkProcess />
      <HeroSection />
      <ServiceType/>
      <WhyChooseUs />
      <Global />
      <ContactInfo />
    </div>
  );
}

export default Home;
