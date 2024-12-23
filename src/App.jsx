import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Analytics from "./Components/Analytics";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
    </div>
  );
}

export default App;
