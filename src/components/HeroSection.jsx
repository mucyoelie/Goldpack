import { useState } from 'react';
import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // State to manage dropdown visibility
  const [isWebsiteAnalyticsOpen, setWebsiteAnalyticsOpen] = useState(false);
  const [isBoostWebsiteOpen, setBoostWebsiteOpen] = useState(false);
  const [isNewDropdownOpen, setNewDropdownOpen] = useState(false); // New dropdown state

  // Toggle functions for dropdowns
  const toggleWebsiteAnalytics = () => setWebsiteAnalyticsOpen(!isWebsiteAnalyticsOpen);
  const toggleBoostWebsite = () => setBoostWebsiteOpen(!isBoostWebsiteOpen);
  const toggleNewDropdown = () => setNewDropdownOpen(!isNewDropdownOpen); // New dropdown toggle

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start relative">
          {/* Large Image */}
          <img
            src="/network2.jpg"
            alt="Team Meeting"
            className="w-full max-w-xl rounded-lg shadow-lg xl:ml-[-5rem] xl:h-[25rem]"
          />
          {/* Small Overlapping Image */}
          <img
            src="/consultancy1.jpg"
            alt="Team Collaboration"
            className="absolute bottom-[-40px] left-10 w-48 rounded-lg shadow-md"
          />
          {/* Blue Decoration */}
          <div className="absolute -left-6 -bottom-10 w-12 h-12 bg-blue-500 rounded-full"></div>
        </div>

        {/* Right Content Section */}
        <div className="md:w-1/2 xl:mr-[-6rem]">
          <h3 className="text-blue-600 font-semibold uppercase">Markets</h3>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Get the best service from us.
          </h2>
          <p className="text-gray-600 mt-4">
            Explore Goldpack specialized IT solutions across diverse markets. Whether you’re in the Federal, State, 
            Local and Education (SLED), or Commercial sector, we’re equipped to deliver customized, industry-specific IT services that drive efficiency and innovation. Choose your market to discover how Sterling can empower your organization.
          </p>

          {/* Features Section */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
            {/* Website Analytics with dropdown */}
            <div className="flex flex-col md:flex-row items-start gap-3 cursor-pointer" onClick={toggleWebsiteAnalytics}>
              <ArrowRightCircle className="text-blue-500" size={32} />
              <p className="text-gray-900 font-semibold text-lg">Federal</p>
            </div>
            {isWebsiteAnalyticsOpen && (
              <div className="mt-2 pl-12 text-gray-700">
                {/* Content for Website Analytics dropdown */}
                <p><span className='text-[#003366] font-medium'>GoldPack</span> is an experienced Federal IT solutions provider with 8+ years of expertise. They use strategic OEM partnerships and mission-driven approaches to deliver secure, cost-efficient, and low-risk IT systems. Their skilled team—including top-cleared architects—provides specialized support to meet complex government IT needs.</p>
              </div>
            )}

            {/* Boost Your Website with dropdown */}
            <div className="flex flex-col md:flex-row items-start gap-3 cursor-pointer" onClick={toggleBoostWebsite}>
              <ArrowRightCircle className="text-blue-500" size={32} />
              <p className="text-gray-900 font-semibold text-lg">State, Local & Education</p>
            </div>
            {isBoostWebsiteOpen && (
              <div className="mt-2 pl-12 text-gray-700">
                {/* Content for Boost Your Website dropdown */}
                <p><span className='text-[#003366] font-medium'>GoldPack</span> provides tailored IT solutions to state/local governments and educational institutions, addressing their unique challenges and budget constraints. By leveraging strong OEM partnerships, they deliver cost-effective, efficient, and low-risk technology solutions. Their team helps define, deploy, and support IT systems to maximize value and operational performance.</p>
              </div>
            )}

            {/* New Dropdown Section */}
            <div className="flex flex-col md:flex-row items-start gap-3 cursor-pointer" onClick={toggleNewDropdown}>
              <ArrowRightCircle className="text-blue-500" size={32} />
              <p className="text-gray-900 font-semibold text-lg">Commercial</p>
            </div>
            {isNewDropdownOpen && (
              <div className="mt-2 pl-12 text-gray-700">
                {/* Content for the new dropdown */}
                <p><span className='text-[#003366] font-medium'>GoldPack</span> delivers customized IT solutions to commercial enterprises—including healthcare, finance, and retail—helping them enhance efficiency, innovation, and industry-specific performance. By supplementing internal IT teams, Sterling enables seamless system integration in healthcare, faster financial transactions, and retail digital transformation. Their expertise ensures tailored technology solutions that drive business growth and improve customer experiences.</p>
              </div>
            )}
          </div>

          {/* Button */}
          <button className="mt-8 bg-[#003366] text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 hover:bg-blue-500 transition">
            <Link to="/about" className=" px-2">About Us</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

