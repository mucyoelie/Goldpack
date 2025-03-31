import { Link } from "react-router-dom";
import { MessageSquare, Smartphone } from "lucide-react";

const Card = () => {
  const apis = [
    {
      icon: <MessageSquare className="text-green-600 text-2xl my-4 bg-blue-100 w-12 h-12 rounded-full p-2" />,
      title: "IT  INFRASTRUCTURE  SERVICES",
      description: "At Gold Pack Ltd, We’re all about building and managing the IT foundation you can count on.",
      features: [
        "Network Design, Implementation, and Management",
        "Cloud Computing Solutions",
        "Cybersecurity Services",
        "Data Center Setup and Maintenance",
        "IT Consulting and Managed Services"
      ],
      link: "/infrastructure",
    },
    {
      icon: <Smartphone className="text-blue-700 text-2xl my-4 bg-blue-100 w-12 h-12 rounded-full p-2" />,
      title: "IT EQUIPMENT SUPPLY",
      description: "At Gold Pack Ltd, We deliver the tools you need to get the job done, hassle-free.",
      features: [
        "Types of Equipment",
        "Brands/Partners",
        "Procurement",
        " Delivery",
        "Installation",
      ],
      link: "/equipment",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-10 bg-white">
      {apis.map((api, index) => (
        <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200 w-full text-start h-[27rem]">
          <div className="w-10 h-10 rounded-full bg-transparent">{api.icon}</div>
          <h1 className="text-black text-xl font-medium text-start my-4">{api.title}</h1>
          <p className="text-[#B0B0B0] mt-2 text-start">{api.description}</p>
          
          {/* Features List */}
          <ul className="list-disc list-inside text-gray-600 mt-3 text-start">
            {api.features.map((feature, i) => (
              <li key={i} className="text-sm py-1">{feature}</li>
            ))}
          </ul>

          <Link to={api.link}>
            <button className="mt-4 px-6 py-2 border text-white rounded-lg hover:bg-blue-500 w-40 bg-[#003366]">
              View Service
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
