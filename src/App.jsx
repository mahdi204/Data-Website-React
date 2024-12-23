import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Analytics from "./Components/Analytics";
import Newletter from "./Components/Newletter";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
