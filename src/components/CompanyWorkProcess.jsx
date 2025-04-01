import {  LifeBuoy,BookOpen,RefreshCcw } from "lucide-react";

const services = [
  {
    title: "Legendary Support",
    description: "We don’t disappear after delivery. Gold Pack is known for its legendary support, offering fast, friendly, and professional help whenever you need it.",
    icon: <LifeBuoy className="text-blue-600 text-5xl" />,
    features: [
      "Fast response times",
      "Expert technicians on call",
      "Ongoing assistance for all services",
    ],
  },
  {
    title: "Get Your Clarifications",
    description: "Not sure what you need? We’re here to explain it all. Reach out anytime to get clear, honest answers from our expert team.",
    icon: <BookOpen className="text-blue-600 text-5xl" />,
    features: [
      "Free consultations",
      "Quick answers to your questions",
      "Help choosing the right products or services",
    ],
  },
  {
    title: "Maintenance Package",
    description: "Stay ahead of problems with our tailored maintenance packages. We keep your systems secure, updated, and performing at their best.",
    icon: <RefreshCcw className="text-blue-600 text-5xl" />,
    features: [
      "Regular system check-ups",
      "Preventive maintenance",
      "Priority technical support",
      "Affordable, flexible plans",
    ],
  },
];

const CompanyWorkProcess = () => {
  return (
    <section className=" py-12">
      <div className="mx-auto text-center">
        <p className="text-lg">Core Feature</p>
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Company Work Process
        </h2>
        <div className="grid md:grid-cols-3 gap-6 px-4 xl:mx-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-start"
            >
              {service.icon}
              <h2 className="text-blue-900 text-2xl font-bold mt-4 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Mapping the features as a list */}
              <ul className="text-gray-600 text-left list-disc list-inside space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyWorkProcess;
