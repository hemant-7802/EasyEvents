import React from 'react'
import { Routes, Route } from "react-router-dom"
import Categories from "../category/Categories";
import Hotels from "../cards/Hotels";
import Gardens from "../cards/Gardens";
import Caterings from "../cards/Caterings";
import Fireworks from "../cards/Fireworks";
import Cardsprinting from "../cards/Cardsprinting";
import Lights from "../cards/Lights";
import Kiranas from "../cards/Kiranas";
import Salons from "../cards/Salon";
import Menswear from "../cards/Menswear";
import Womenswear from "../cards/Womenswear";
import Nurseries from "../cards/Nurseries";
import Cars from "../cards/Cars";
import Sounds from "../cards/Sounds";
import Photography from "../cards/Photography";
import Mare from "../cards/Mare";
import { cardsprintingObj, carsObj, cateringsObj, fireworksObj, gardensObj, hotelsObj, kiranaObj, lightsObj, mareObj, menswearObj, nurseriesObj, photographyObj, salonsObj, soundsObj, womenswearObj } from "../../_Details";

const LoginPage = ({className= ''}) => {
  return (
    <div className={`${className}`}>
      <Routes>
        <Route path="/" element={<Categories />} />
      </Routes>
    </div>
  )
}

export default LoginPage
