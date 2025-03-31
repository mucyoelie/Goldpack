import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100">
      <h5 className="text-blue-600 text-center font-semibold">Need any Helps</h5>
      <h2 className="text-4xl font-bold text-center text-gray-900 mt-2">
        Contact Informations
      </h2>
      <p className="text-gray-500 text-center mt-2">
        Get in touch with us for inquiries, support, or collaboration. We’re here to help!
      </p>

      {/* Contact Details */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Location */}
        <div className="p-6 border rounded-lg shadow-sm">
          <FaMapMarkerAlt className="text-[#003366] text-4xl mb-3" />
          <h3 className="text-xl font-semibold">Locations</h3>
          <p className="text-gray-600">
            Grand Pension Plaza, Lower Ground Floor, KN3, Kigali, Rwanda
          </p>
        </div>

        {/* Email */}
        <div className="p-6 border rounded-lg shadow-sm">
          <FaEnvelope className="text-[#003366] text-4xl mb-3" />
          <h3 className="text-xl font-semibold">Email Us</h3>
          <p className="text-gray-600">gonzague@goldpacklive.com</p>
          <p className="text-gray-600">sales@goldpacklive.com</p>
        </div>

        {/* Phone */}
        <div className="p-6 border rounded-lg shadow-sm">
          <FaPhoneAlt className="text-[#003366] text-4xl mb-3" />
          <h3 className="text-xl font-semibold">Phone No</h3>
          <p className="text-gray-600">Mobile: +250783455279</p>
          <p className="text-gray-600">WhatsApp: +250783455279</p>
        </div>

        {/* Working Hours */}
        <div className="p-6 border rounded-lg shadow-sm">
          <FaClock className="text-[#003366] text-4xl mb-3" />
          <h3 className="text-xl font-semibold">Working Hour</h3>
          <p className="text-blue-600 font-medium">Monday - Friday</p>
          <p className="text-gray-600">08:00am - 06:00pm</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
