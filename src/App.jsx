import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Product from "./pages/products";
import ServerGrid from "./pages/Server";
import SwitchGrid from "./pages/Switch";
import Contact from "./pages/Contact";
import LaptopGrid from "./components/LaptopGrid"; 
import RouterGrid from "./pages/Router"; // Import the component
import Footer from "./components/Footer";
import Infrastructure from "./components/Infrastructure ";
import Equipment from "./components/Equipment";
import LoadingSpinner from "./components/LoadingSpinner";
import { useEffect, useState } from "react";
import NotFound from "./pages/NotFound"; // Optional: 404 Page

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="font-poppins w-full h-full overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service/>}/>
          <Route path="/product" element={<Product />} />
          <Route path="/laptops" element={<LaptopGrid />} /> {/* New route for Laptops */}
          <Route path="/servers" element={<ServerGrid />} />
          <Route path="/switches" element={<SwitchGrid />} />
          <Route path="/routes" element={<RouterGrid />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
