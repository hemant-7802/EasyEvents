import React from "react";
import { useAuthContext } from "./context/authContext";
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import Login from "./components/navbar/login/Login";
import Signup from "./components/signup/Signup";
import { cardsprintingObj, carsObj, cateringsObj, fireworksObj, gardensObj, hotelsObj, kiranaObj, lightsObj, mareObj, menswearObj, nurseriesObj, photographyObj, salonsObj, soundsObj, womenswearObj } from "./_Details";
import Hotels from "./components/cards/Hotels";
import Gardens from "./components/cards/Gardens";
import Caterings from "./components/cards/Caterings";
import Salons from "./components/cards/Salon";
import Fireworks from "./components/cards/Fireworks";
import Kiranas from "./components/cards/Kiranas";
import Lights from "./components/cards/Lights";
import Cars from "./components/cards/Cars";
import Cardsprinting from "./components/cards/Cardsprinting";
import Sounds from "./components/cards/Sounds";
import Photography from "./components/cards/Photography";
import Mare from "./components/cards/Mare";
import Menswear from "./components/cards/Menswear";
import Womenswear from "./components/cards/Womenswear";
import Nurseries from "./components/cards/Nurseries";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";

export default function App() {
  const { authUser } = useAuthContext()

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={authUser ? <Navigate to={'/'} /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={'/'} /> : <Signup />} />
        <Route path="hotelscard" element={<Hotels categoryName="hotels" details={hotelsObj} />} />
        <Route path="gardencard" element={<Gardens categoryName='gardens' details={gardensObj} />} />
        <Route path="cateringcard" element={<Caterings categoryName="caterings" details={cateringsObj} />} />
        <Route path="saloncard" element={<Salons categoryName="unisex parlour" details={salonsObj} />} />
        <Route path="fireworkcard" element={<Fireworks categoryName="fireworks" details={fireworksObj} />} />
        <Route path="grocerycard" element={<Kiranas categoryName="grocery store" details={kiranaObj} />} />
        <Route path="lightcard" element={<Lights categoryName="lights & decoration" details={lightsObj} />} />
        <Route path="carcard" element={<Cars categoryName="cars & Travels" details={carsObj} />} />
        <Route path="cardsprintingcard" element={<Cardsprinting categoryName="Cards Printing" details={cardsprintingObj} />} />
        <Route path="soundscard" element={<Sounds categoryName="DJ & Sounds" details={soundsObj} />} />
        <Route path="photographycard" element={<Photography categoryName="photography" details={photographyObj} />} />
        <Route path="marecard" element={<Mare categoryName="mare" details={mareObj} />} />
        <Route path="menswearcard" element={<Menswear categoryName="men's wear" details={menswearObj} />} />
        <Route path="womenswearcard" element={<Womenswear categoryName="women's wear" details={womenswearObj} />} />
        <Route path="nurseriescard" element={<Nurseries categoryName="nurseries" details={nurseriesObj} />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}
