import React from "react";
import Nav from "./components/navbar/Nav";
import Heropage from "./components/heropage/Heropage";
import WhyUs from "./components/whyus/WhyUs";
import Map_contact from "./components/map & contact/Map_contact";
import Team from "./components/ourteam/Team";
import Review from "./components/Customer_Review/Review";
import Footer from "./components/footer/Footer";
import About from "./components/about us/About"
// import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Nav />
      <Heropage />
      <WhyUs />
      <About />
      <Team />
      <Review />
      <Map_contact />
      <Footer />
    </div>
  );
}
