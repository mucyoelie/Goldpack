import { useState } from "react";

const routes = [
  { id: 1, name: "Cisco ISR 1100", description: "Gigabit Ethernet, VPN support, SD-WAN enabled.", image: "router1.jpeg" },
  { id: 2, name: "MikroTik RB4011", description: "10x Gigabit ports, 1x 10Gbps SFP+, Quad-core CPU.", image: "router3.png" },
  { id: 3, name: "Ubiquiti EdgeRouter 4", description: "4-Port Gigabit, 1 million packets per second, PoE input.", image: "router4.jpeg" },
  { id: 4, name: "TP-Link TL-R605", description: "5-Port Gigabit VPN Router, Load Balancing, Omada SDN support.", image: "router5.jpeg" }
];



function RouterGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleOrder = () => {
    const phoneNumber = "250783455279"; // Your WhatsApp number
    const message = `Hello, I would like to order:\n\n` +
                    `🖥 *Product:* ${selectedProduct.name}\n` + // 🖥 emoji for product
                    `📦 *Quantity:* ${quantity}\n` + // 📦 emoji for quantity
                    `👤 *Name:* ${name}\n` + // 👤 emoji for name
                    `📧 *Email:* ${email}`; // 📧 emoji for email
  
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };
  

  return (
    <div className="container mx-auto px-6 py-10 my-20">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {routes.map((laptop) => (
          <div key={laptop.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 p-2">
            <img src={laptop.image} alt={laptop.name} className="w-full h-48 object-cover rounded-lg my-4" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#003366]">{laptop.name}</h3>
              <p className="text-gray-600 mt-2">{laptop.description}</p>
              <button 
                className="mt-4 bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                onClick={() => setSelectedProduct(laptop)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Form Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Order {selectedProduct.name}</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-semibold">Full Name:</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 p-2 rounded-lg" 
                  placeholder="Your Name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
              <div>
                <label className="block font-semibold">Email:</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 p-2 rounded-lg" 
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div>
                <label className="block font-semibold">Quantity:</label>
                <input 
                  type="number" 
                  min="1" 
                  className="w-full border border-gray-300 p-2 rounded-lg" 
                  value={quantity} 
                  onChange={(e) => setQuantity(e.target.value)} 
                />
              </div>
              <button 
                type="button"
                onClick={handleOrder} 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-full"
              >
                Send Order via WhatsApp
              </button>
            </form>
            <button 
              className="mt-4 text-red-500 w-full text-center font-semibold"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RouterGrid;
