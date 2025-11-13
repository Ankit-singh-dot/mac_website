import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductReview from "./components/ProductReview";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <ProductReview />
      </main>
    </div>
  );
}

export default App;
