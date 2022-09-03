import React from "react";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
// import components
import { Hero } from "./components";

const App = () => {
  // aos init
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className="overflow-hidden">
      <Hero />
    </div>
  );
};

export default App;
