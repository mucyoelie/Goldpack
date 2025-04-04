
import { Link } from "react-router-dom";
const Commitment = () => {
  return (
    <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row xl:flex-row lg:flex-row items-center gap-10 bg-gray-100">
        {/* Right Image */}
        <div className="md:w-1/2  flex flex-col  items-center md:items-start relative">
          <img
            src="/repair.jpg"
            alt="IT Agency Illustration"
            className="w-full max-w-lg rounded-lg xl:ml-4 xl:h-[25rem]"
          />
        </div>

      {/* Right - Content Section */}
      <div className="w-full md:w-1/2">
        <p className="text-gray-500 text-sm flex items-center gap-2">
          We are <span className="bg-[#003366] text-white px-2 py-1 rounded-md">Techco</span>
        </p>
        <h2 className="text-5xl font-bold text-gray-900 mt-3 w-full">
        We deliver It Equipments and Resolve Problems
        <br /> 
        </h2>
        <p className="text-gray-600 mt-4">
          <span className="text-[#003366] font-medium">GoldPack</span>
        {` support clients need to make their vision a reality through accessing
         IT services In the spirit of building closer ties with the communities in which we work, and live Reading Technology and 
         its employees play an active role in large number of local effort for the clients.`}
        </p>

        {/* Bullet Points */}
        <ul className="mt-4 space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            ✅ Grow your business the right way.
          </li>
          <li className="flex items-center gap-2">
            ✅ Let business growth help your business grow.
          </li>
          <li className="flex items-center gap-2">
            ✅ Helping you to get better.
          </li>
        </ul>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-[#003366] text-white px-2 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:bg-blue-500 transition">
          <Link to="/contact" className="px-2">Get A Quote 
          </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
