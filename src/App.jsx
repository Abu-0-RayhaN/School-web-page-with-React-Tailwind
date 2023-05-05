// import React from 'react'
import {
  Navbar,
  Contact,
  Footer,
  Hero,
  Donate,
  Welcome,
  Gallery,
} from "./components";
const App = () => {
  return (
    <div className="text-white">
      <Navbar />
      <Hero />
      <Welcome />
      <Gallery />
      <Donate />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
