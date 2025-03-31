import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start relative">
          {/* Large Image */}
          <img
            src="/network2.jpg"
            alt="Team Meeting"
            className="w-full max-w-xl rounded-lg shadow-lg xl:-mx-[3rem]"
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
            <div className="flex items-center gap-3">
              <ArrowRightCircle className="text-blue-500" size={32} />
              <p className="text-gray-900 font-semibold text-lg">Website Analytics</p>
            </div>
            <div className="flex items-center gap-3">
              <ArrowRightCircle className="text-blue-500" size={32} />
              <p className="text-gray-900 font-semibold text-lg">Boost Your Website</p>
            </div>
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
