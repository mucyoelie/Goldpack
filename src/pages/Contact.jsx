import { useState } from 'react';
import emailjs from "emailjs-com"; 
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

const Contact = () =>{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm("service_8wpvagf", "sales@goldpacklive.com", e.target, "wqhoCxnLUOQLJX8cu") 
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          console.log(result.text);
          setFormData({ name: "", email: "", phone: "", message: "" }); // Clear the form after sending
        },
        (error) => {
          alert("Error: Message not sent!");
          console.log(error.text);
        }
      );
  };

    return (
        <div className="xl:mx-auto py-16 px-6 flex flex-col md:flex-row gap-10 my-20 lg:mx-10 md:mx-4">
            {/* Contact Info */}
            <div className="md:w-1/3 space-y-6 xl:ml-20 h-[30rem]">
                <h2 className="text-[#003366] font-semibold uppercase">Contact Us</h2>
                <h1 className="text-3xl font-bold">You can connect with us when you need help!</h1>
                <div className="space-y-8">
                    <div className="flex items-center space-x-4 bg-gray-100 h-40 rounded-lg">
                        <FaMapMarkerAlt className="text-[#003366] text-2xl ml-4" />
                        <div>
                            <h3 className="font-semibold">Office Location</h3>
                            <p>MAKUZA PEACE PLAZA, Ground Floor, Kigali, Rwanda</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-100 h-40 rounded-lg">
                        <FaPhone className="text-[#003366] text-2xl ml-4" />
                        <div>
                            <h3 className="font-semibold">Phone</h3>
                            <p>(+250) 783 455 279</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-100 h-40 rounded-lg">
                        <FaEnvelope className="text-[#003366] text-2xl ml-4" />
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <p>sales@goldpacklive.com </p>
                            <p>gonzague@goldpacklive.com</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3 bg-white p-6 shadow-md xl:h-[39rem] h-[45rem] xl:mt-14 mt-80 lg:mt-20 md:mt-14">
                <form onSubmit={handleSubmit} className="space-y-6 border-b-2 border-[#B0B0B0] py-2">
                    <div className="grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 gap-4">
                        <input 
                        type="text" name="name" placeholder="Name" 
                        value={formData.name} onChange={handleChange} 
                        className=" border-[#B0B0B0] border-[1.2px] p-3 w-full rounded-md" required />
                        <input 
                        type="email" name="email" placeholder="Email" 
                        value={formData.email} onChange={handleChange} 
                        className="border-[#B0B0B0] border-[1.2px] p-3 w-full rounded-md" required />
                    </div>
                    <input 
                    type="tel"
                     name="phone" 
                     placeholder="Phone" 
                     value={formData.phone} 
                     onChange={handleChange}
                      className="border-[#B0B0B0] border-[1.2px] p-3 w-full rounded-md" 
                      required />

                    <textarea name="message" 
                    placeholder="Please describe what you need." 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="border-[#B0B0B0] border-[1.2px] p-3 w-full rounded-md h-40" 
                    required>
                    </textarea>
                    <button 
                    type="submit" 
                    className="bg-[#003366] text-white px-6 py-3 rounded-md w-full md:w-auto my-10 py-4">
                      Send Message
                      </button>

                </form>
                <p className="text-lg font-medium mt-6">Connect with Us on social media</p>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-center py-5">
            {/*Linkedin */}
            <a href="https://www.linkedin.com" 
             target="_blank" rel="noopener noreferrer" 
             className="text-blue-600 hover:text-teal-500">
            <FaLinkedin size={35} />
            </a>
             {/*Instagram */}
            <a href="https://www.instagram.com/mucyo.web/" 
             target="_blank" rel="noopener noreferrer" 
            className="text-red-700 hover:text-teal-500">
            <FaInstagram size={35} />
            </a>
             {/*WhatsApp */}
            <a href="https://wa.me/250783455279" 
             target="_blank" rel="noopener noreferrer" 
            className="text-green-700 hover:text-teal-500">
            <IoLogoWhatsapp size={35} />
            </a>
             {/*Phone */}
            <a href="tel:+250783175236" className="text-blue-300 hover:text-teal-500">
              <BsFillTelephoneFill size={35} />
              </a>
               {/*FaceBook*/}
            <a href="https://www.facebook.com/mucyo.eliequintano/" 
            target="_blank" rel="noopener noreferrer" 
            className="text-blue-600 hover:text-teal-500">
              <FaFacebook size={35} />
              </a>
               {/*Twitter*/}
            <a href="https://x.com/ElieM45470" 
            target="_blank" rel="noopener noreferrer" 
            className="text-blue-500 hover:text-teal-500">
              <FaTwitter size={35} />
              </a>
          </div>
            </div>
        </div>
    );
};

export default Contact;
