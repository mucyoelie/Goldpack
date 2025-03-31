
import LaptopGrid from "../components/LaptopGrid";
import { laptops } from "../data/products";

function LaptopsPage() {
  return <LaptopGrid title="All Laptops" products={laptops} />;
}

export default LaptopsPage;
