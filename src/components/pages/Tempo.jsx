import React from 'react'
import HeroSection from './Content/TempoHero2'
import TravelLocations from './Content/TempoLocation'
import { TempoFeature } from './Content/TempoFeatures'
import VehicleDetails from '../VehicleDetails'
import Pricing from '../Pricing'


function Tempo() {
  return (
    <div className='h-screen'>
      
      <HeroSection/>
      <VehicleDetails/>
      <Pricing/>
     <TempoFeature/>

    </div>
  )
}

export default Tempo