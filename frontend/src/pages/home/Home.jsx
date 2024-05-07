import React from 'react'
import Heropage from '../../components/heropage/Heropage'
import WhyUs from '../../components/whyus/WhyUs'
import About from '../../components/about us/About'
import Team from '../../components/ourteam/Team'
import Review from '../../components/Customer_Review/Review'
import Map_contact from '../../components/map & contact/Map_contact'
import Categories from '../../components/category/Categories'
import { useAuthContext } from '../../context/authContext'

const Home = () => {
  const { authUser } = useAuthContext()

  return (
    <>
      <Heropage />
      {authUser ? <Categories /> : ''}
      <WhyUs />
      {authUser ? '' : <About />}
      {authUser ? '' : <Team />}
      <Review />
      <Map_contact />
    </>
  )
}

export default Home
