import { CheckCircle, PhoneCall } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-[40px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h3 className="text-blue-600 font-semibold uppercase">Why Choose Us</h3>
          <p className="text-gray-600 mt-4">
          At Gold Pack Ltd, we don’t just deliver IT products—we provide reliable, tailor-made solutions that empower your business. 
          With a deep understanding of the local market and strong partnerships with global brands, we ensure quality, affordability, and fast delivery every time.
          </p>

          {/* Features List */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500" size={24} />
              <p className="text-gray-800 font-semibold">Trusted local and international experience</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500" size={24} />
              <p className="text-gray-800 font-semibold">Certified professionals with hands-on expertise</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500" size={24} />
              <p className="text-gray-800 font-semibold">End-to-end IT solutions—from sales to support</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500" size={24} />
              <p className="text-gray-800 font-semibold">Quick response and personalized customer service</p>
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
