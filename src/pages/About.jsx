
import { Target, Handshake, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="min-w-full min-h-screen bg-cover relative mt-20">
      <section className="bg-transparent px-6 sm:p-10 text-left w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[90%] mx-auto pt-10 sm:pt-16 rounded-lg">
        {/* About Us Content (Text + Image) */}
        <div className="flex flex-col xl:flex-row items-center mb-10 w-full">
          {/* Left Side: Text Content */}
          <div className="flex-1 mb-6 xl:mb-0 w-full">
            <h4 className="text-lg sm:text-xl md:text-xl lg:text-xl font-bold text-[#003366] mb-4">
              About Gold Pack
            </h4>
            <p className="text-md text-gray-600 mb-4 leading-relaxed ">
            Gold Pack IT Solutions provides end-to-end network management services, 
            delivering expert solutions that optimize network performance and reliability. 
            Our offerings cover the full spectrum of IT needs, from networking and server infrastructure to cyber security, 
            applications, and consulting. We are dedicated to seamless integration, efficient management of networks, servers, 
            and virtual machines, and the supply of top-quality network equipment from leading brands such as Cisco, HP, Dell, 
            and more—all at highly competitive prices.

            </p>
            
            <p className="text-md text-gray-600 mb-4 leading-relaxed font-raleway">
            Our product lineup includes essential tools like switches, routers, security solutions, 
            wireless technologies, and VOIP phones, and our online IT web shop is customized to meet specific client needs,
             ensuring that businesses receive the best solutions with quick delivery.

            </p>
            
            <p className="text-md text-gray-600 mb-4 leading-relaxed font-raleway">
              {'With a skilled team of professionals from diverse IT and business backgrounds, we deliver tailored IT solutions that are on time, within budget, and focused on maximizing clients’ return on investment. We approach each client as a valuable partner, working together to achieve common goals. This partnership mindset reflects our commitment to helping clients get the most value from their IT investments, enabling them to excel in their core business operations.'}
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 w-full xl:w-auto flex justify-center xl:justify-end">
            <img
              src="goldpack.jpg"
              alt="goldpack-image"
              className="w-full xl:w-[35vw] max-w-[600px] h-[80vh] max-h-[90vh] rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Core Value, Vision, and Mission Cards */}
        <div className="flex flex-col xl:flex-row justify-between w-full gap-6 font-raleway my-10">
          {/* Core Value Card */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <Handshake className="text-5xl text-[#003366]" />
            <h3 className="text-2xl font-bold text-[#003366] mb-3">Core Value</h3>
            <p className="text-gray-600 text-base">
              We build trust through reliable partnerships, delivering customized IT solutions with integrity and technical excellence.
            </p>
          </div>

          {/* Vision Card */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <Eye className="text-5xl text-[#003366]" />
            <h3 className="text-2xl font-bold text-[#003366] mb-3">Vision</h3>
            <p className="text-gray-600 text-base">
              {`We aim to be the trusted backbone of Africa’s digital future, delivering simple, cost-friendly IT solutions that drive growth and connection for all.`}
             
            </p>
          </div>

          {/* Mission Card */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <Target className="text-5xl text-[#003366]" />
            <h3 className="text-2xl font-bold text-[#003366] mb-3">Mission</h3>
            <p className="text-gray-600 text-md">
            At <span className="text-[#003366] font-medium">Gold Pack Ltd</span>, we’re here to power businesses and institutions with strong, 
            affordable IT infrastructure and reliable equipment, making technology work for each institution across Rwanda and beyond.
            </p>
          </div>
        </div>

       
      </section>
    </div>
  );
};

export default About;