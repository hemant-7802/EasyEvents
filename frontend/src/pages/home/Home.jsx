import React from 'react'
import Nav from '../../components/navbar/Nav'
import Heropage from '../../components/heropage/Heropage'
import WhyUs from '../../components/whyus/WhyUs'
import About from '../../components/about us/About'
import Team from '../../components/ourteam/Team'
import Review from '../../components/Customer_Review/Review'
import Map_contact from '../../components/map & contact/Map_contact'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Nav />
      <Heropage />
      <WhyUs />
      <About />
      <Team />
      <Review />
      <Map_contact />
      <Footer />
    </>
  )
}

export default Home
