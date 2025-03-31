import { FaComments, FaCertificate, FaBox } from "react-icons/fa";

const services = [
  {
    title: "Support",
    subtitle: "Legendary",
    description: "Offering Smart Insurance Investment Solutions to Companies",
    icon: <FaComments className="text-blue-600 text-5xl text-center mx-auto" />,
  },
  {
    title: "Clarifications",
    subtitle: "Get Your",
    description: "Offering Smart Insurance Investment Solutions to Companies",
    icon: <FaCertificate className="text-blue-600 text-5xl text-center mx-auto" />,
  },
  {
    title: "Package",
    subtitle: "Maintenance",
    description: "Offering Smart Insurance Investment Solutions to Companies",
    icon: <FaBox className="text-blue-600 text-5xl flex items-center mx-auto" />,
  },
];

const CompanyWorkProcess = () => {
  return (
    <section className="bg-gray-white py-12">
      <div className=" mx-auto text-center">
        <p className="text-center text-lg">Core Feature</p>
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Company work process
        </h2>
        <div className="grid md:grid-cols-3 gap-6 px-4 xl:mx-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <h3 className="text-gray-500 text-lg font-medium">
                {service.subtitle}
              </h3>
              <h2 className="text-blue-900 text-2xl font-bold mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              {service.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyWorkProcess;
