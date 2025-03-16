import React from 'react'
import HeroSection from './Content/TempoHero2'
import TravelLocations from './Content/TempoLocation'
import { TempoFeature } from './Content/TempoFeatures'
import VehicleDetails from '../VehicleDetails'
import Pricing from '../Pricing'
import Footer from '../Footer'
import Navbar from '../Navbar'
import TravelServices from './Content/TravelServices'
import WhyChooseUs from './Content/WhyUs'



function Tempo() {
  return (
    <div className='h-screen'>
              <Navbar/>

      <HeroSection/>
      <TravelServices/>
      <VehicleDetails/>
      <Pricing/>
      <WhyChooseUs/>
     <TempoFeature/>
     <Footer/>

    </div>
  )
}

export default Tempo