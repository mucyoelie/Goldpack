import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  { id: 1, image: "Coffee3.png", text: "KBL Coffee prioritizes women empowerment and ethical agro-industry practices, ensuring full traceability from farm to cup. Every purchase supports farmers directly, promoting sustainability and fair trade." },
  { id: 2, image: "Coffee3.png", text: "KBL Coffee prioritizes women empowerment and ethical agro-industry practices, ensuring full traceability from farm to cup. Every purchase supports farmers directly, promoting sustainability and fair trade." },
  { id: 3, image: "Coffee3.png", text: "KBL Coffee prioritizes women empowerment and ethical agro-industry practices, ensuring full traceability from farm to cup. Every purchase supports farmers directly, promoting sustainability and fair trade." },
  { id: 4, image: "Coffee3.png", text: "KBL Coffee prioritizes women empowerment and ethical agro-industry practices, ensuring full traceability from farm to cup. Every purchase supports farmers directly, promoting sustainability and fair trade." },
  { id: 5, image: "Coffee3.png", text: "KBL Coffee prioritizes women empowerment and ethical agro-industry practices, ensuring full traceability from farm to cup. Every purchase supports farmers directly, promoting sustainability and fair trade." },
];

const StackedCardCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-[350px] h-[450px]">
            {cards.map((card, index) => (
        <motion.div
          key={`${card.id}-${index}`} // Ensure uniqueness
          className="absolute w-full h-full flex flex-col items-center justify-center text-white font-bold text-lg rounded-lg shadow-lg cursor-pointer overflow-hidden"
          style={{ backgroundColor: `white` }}
          animate={{
            x: selectedIndex === index ? 0 : selectedIndex !== null && index < selectedIndex ? -100 - index * 20 : index * 20,
            scale: selectedIndex === index ? 1.2 : 0.9,
            zIndex: selectedIndex === index ? 10 : index,
            opacity: selectedIndex === index ? 1 : 0.8,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={() => handleCardClick(index)}
        >
          <div className="text-gray-900 text-7xl">{card.id}</div>
          <img src={card.image} alt={card.text} className="w-60 h-40 object-cover mx-40 px-2 mb-2" />
          <div className="px-10  bg-gray-200 w-full text-start text-gray-900 ">{card.text}</div>
        </motion.div>
      ))}
      </div>
    </div>
  );
};

export default StackedCardCarousel;
