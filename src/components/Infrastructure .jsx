import { Globe,CloudUpload , Cpu,Database,Activity  } from 'lucide-react';

const services = [
  {
    title: "Network Design, Implementation & Management ",
    description: "We create custom networks from the ground up, set them in place, and keep them running smoothly day in, day out.",
    icon: <Globe className="text-blue-600 text-5xl text-center" />,
  },
  {
    title: "Cloud Computing Solutions",
    description: "We help you move to the cloud, set up hybrid systems, and make sure it all works seamlessly for your team.",
    icon: <CloudUpload className="text-blue-600 text-5xl text-center" />,
  },
  {
    title: "Cybersecurity Services",
    description: "We keep an eye out with monitoring and threat detection, locking down your systems against risks.",
    icon: < Cpu    className="text-blue-600 text-5xl flex items-center" />,
  },
  {
    title: "Data Center Setup & Maintenance",
    description: "We design and maintain data centers that store your info securely and keep it accessible when you need it.",
    icon: <Database className="text-blue-600 text-5xl flex items-center" />,
  },
  {
    title: "IT Consulting & Managed Services ",
    description: "We guide you with expert advice and take the load off with ongoing support, tailored to your goals.",
    icon: <Activity  className="text-blue-600 text-5xl" />,
  },
  
];

const Infrastructure = () => {
  return (
    <section className="bg-gray-100 py-12 mt-20">
      <div className=" mx-auto text-start">
        <h2 className="text-3xl font-medium text-[#003366] text-center mb-8  xl:ml-24">
         IT Infrastructure Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 px-4 xl:mx-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-start"
            >
                {service.icon}
              <h2 className="text-blue-900 text-2xl font-medium mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;