import { Laptop, Award, Cable} from 'lucide-react';

const services = [
  {
    title: "Types of Equipment",
    description: "We supply servers, workstations, networking hardware, plus laptops of all brands and sorts, and other basic IT equipment for office use or individuals—whatever keeps you going.",
    icon: <Laptop className="text-blue-600 text-5xl text-center" />,
  },
  {
    title: "Brands/Partners",
    description: "We work with top names like Cisco, Dell, and HP, among many others bringing you gear you can trust.",
    icon: <Award className="text-blue-600 text-5xl text-center" />,
  },
  {
    title: "Procurement, Delivery & Installation",
    description: "We source it, ship it, and set it up, so you’re ready to roll without lifting a finger.",
    icon: < Cable className="text-blue-600 text-5xl flex items-center" />,
  },
  
];

const Equipment = () => {
  return (
    <section className="bg-gray-100 py-12 mt-20">
      <div className=" mx-auto text-center">
      <h2 className="text-3xl font-medium text-[#003366] text-center mb-8  xl:ml-24">
      IT EQUIPMENT SUPPLY
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

export default Equipment;