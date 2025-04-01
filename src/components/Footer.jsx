
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {
   MapPin, 
   Phone, 
   Mail,
   Globe,
   CloudUpload , 
   Cpu,
   Database,
   Activity,
   Home, 
   Navigation,
    Package, Wrench, MessageCircle  
  } 
  from 'lucide-react';



const Footer = () => {
  return (
    <footer className="bg-[#0c1c3d] text-white py-12">
      <div className="max-w-7xl xl:mx-20 mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
         
            {/* Logo */}
            <img src="imagerect.png" alt="MyLogo" className="h-20 w-26 xl:-ml-6 xl:-mb-2"/>
   
          <p className=" text-gray-300 text-md">
          Gold Pack Ltd delivers customized IT solutions, from product sales to cybersecurity and cloud services, 
          helping businesses thrive digitally.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="text-lg hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="text-lg hover:text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="text-lg hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

        {/* Company Links */}
        <div>
  <h3 className="text-lg font-semibold mb-4">Navigation</h3>
  <ul className="text-gray-300 space-y-2">
    <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
      <Home size={18} className="text-blue-400"/>
      <a href="/">Home</a>
    </li>
    <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
      <Navigation size={18} className="text-blue-400"/>
      <a href="/about">About Us</a>
    </li>
    <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
      <Wrench size={18} className="text-blue-400"/>
      <a href="/service">Service</a>
    </li>
    <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
      <Package size={18} className="text-blue-400"/>
     <a href="/laptops">Product</a> 
    </li>
    <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
      <MessageCircle size={18} className="text-blue-400"/>
      <a href="/contact">Contact Us</a>
    </li>
  </ul>
</div>

        {/* Solutions Links */}
<div>
  <h3 className="text-lg font-semibold mb-4">Solutions</h3>
  <ul className="text-gray-300 space-y-2">
    <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
      <Activity size={18} className="text-blue-400"/>
      IT Consulting
    </li>
    <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
      <Cpu size={18} className="text-blue-400"/>
      Cybersecurity
    </li>
    <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
      <Globe size={18} className="text-blue-400"/>
      Network Design
    </li>
    <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
      <CloudUpload size={18} className="text-blue-400"/>
      Cloud Computing
    </li>
    <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
      <Database size={18} className="text-blue-400"/>
      Data Center
    </li>
  </ul>
</div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={48} className=" text-blue-400" />
              MAKUZA PEACE PLAZA, Ground Floor, Kigali, Rwanda
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-xl text-blue-400" />
              sales@goldpacklive.com
              <br/>
              gonzague@goldpacklive.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-xl text-blue-400" />
              (+250) 783 455 279
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center text-blue-400 text-lg mt-10 border-t border-gray-700 pt-4">
        Gold Pack <span className="text-white">© All Rights Reserved.</span>
      </div>
       {/* Back to Top Button */}
       <div className="fixed bottom-8 right-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#003366] text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
          >
            ↑ Top
          </button>
        </div>
    </footer>
  );
};

export default Footer;
