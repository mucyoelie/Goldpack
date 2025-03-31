import { CheckCircle, PhoneCall } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-[40px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h3 className="text-blue-600 font-semibold uppercase">Why Choose Us</h3>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            What we promise high quality IT Agency Services
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            voluptate a quis est ullam impedit, tempora eaque maxime.
          </p>

          {/* Features List */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500" size={24} />
              <p className="text-gray-800 font-semibold">Experts around the world</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500" size={24} />
              <p className="text-gray-800 font-semibold">Best Practice for industry</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center xl:-mr-40">
          <img
            src="/consultancy4.jpg"
            alt="IT Agency Illustration"
            className="w-full max-w-lg rounded-lg"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl xl:mx-20 mt-12 border-t pt-6 border-[#003366]">
        <p className="text-gray-600">Join our team – come work with us.</p>
          <span  className="text-gray-900 font-bold text-lg">
          <PhoneCall className="text-blue-600" size={24} /> 
          (+250) 783 455 279
            </span>
      </div>
    </section>
  );
};

export default WhyChooseUs;
