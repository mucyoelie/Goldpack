import { Lightbulb,Lock,UserSearch,Megaphone,Move,Code,Headphones } from "lucide-react";
const Service = [
  {
    id: 1,
    title: 'Understand Client Needs',
    icon: <UserSearch className="text-blue-600 text-5xl my-4" />,
    description:
      'Understanding client needs involves identifying unique challenges, goals, and opportunities through collaboration, ensuring tailored IT solutions that drive innovation, deliver value, and align with business objectives.',
  },
  {
    id: 2,
    title: 'Define Your Core Services',
    icon: <Lightbulb className="text-blue-600 text-5xl my-4" />,
    description:
      'Defining core services means identifying key IT solutions your business specializes in, such as software development, cloud solutions, or cybersecurity. This strategy establishes expertise, aligns offerings with client needs, builds trust, and enables effective marketing to target the right audience.',
  },
  {
    id: 3,
    title: 'Build a Strong Online Presence',
    icon: <Megaphone className="text-blue-600 text-5xl my-4" />,
    description:
      'Building a strong online presence involves creating a professional website, optimizing it for SEO, and showcasing your services and success stories. Engaging content and leveraging social media and digital marketing help increase visibility, build credibility, and attract potential clients.',
  },
  {
    id: 4,
    icon: <Lock className="text-blue-600 text-5xl my-4" />,
    title: 'Emphasize Cybersecurity',
    description:
      'Emphasizing cybersecurity involves implementing strong security measures like encryption and regular audits to protect client data and systems. This builds trust, ensures compliance, and minimizes risks and downtime.',
  },
  {
    id: 5,
    title: 'Adopt Emerging Technologies',
    icon: <Code className="text-blue-600 text-5xl my-4" />,
    description:
      'Adopting emerging technologies involves integrating innovations like AI, ML, and blockchain to improve efficiency, enhance customer experiences, and drive business growth. This positions your business as a leader in the IT industry.',
  },
  {
    id: 6,
    title: 'Stay Agile and Scalable',
    icon: <Move className="text-blue-600 text-5xl my-4" />,
    description:
      'Staying agile and scalable involves using flexible solutions and cloud technologies that adapt to changing needs and support growth. This ensures your services can handle increasing demands and quickly adjust to market changes.',
  },
  {
    id: 7,
    title: 'Provide Excellent Support',
    icon: <Headphones className="text-blue-600 text-5xl my-4" />,
    description:
      'Providing excellent support involves offering responsive, proactive assistance, including help desks, troubleshooting, and training. This builds client relationships, enhances satisfaction, and ensures smooth system operations.',
  },
];

const ServiceType = () => {
  return (
    <div className=" w-full py-16">
      <div className="mx-auto px-6 lg:px-20">
        <h2 className="text-center text-3xl font-bold text-[#003366] mb-10">
          Our Strategies
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Service.map((service) => (
            <div
              key={service.id}
              className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
               {service.icon}
              <h2 className="text-2xl font-bold mb-2  text-[#003366]">{service.title}</h2>
              <p className="text-gray-600 ">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceType;
