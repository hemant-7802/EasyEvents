import React from 'react'
import Nav from '../../components/navbar/Nav'
import Heropage from '../../components/heropage/Heropage'
import LoginPage from '../../components/loginPage/LoginPage'
import WhyUs from '../../components/whyus/WhyUs'
import Team from '../../components/ourteam/Team'
import Review from '../../components/Customer_Review/Review'
import Map_contact from '../../components/map & contact/Map_contact'
import Footer from '../../components/footer/Footer'
import Categories from '../../components/category/Categories'
import { Route, Routes } from 'react-router-dom'

const LoginHome = () => {
  return (
    <>
      <Nav />
      <Heropage />
      <Categories />
      <WhyUs />
      <Team />
      <Review />
      <Map_contact />
      <Footer />
    </>
  )
}

export default LoginHome
