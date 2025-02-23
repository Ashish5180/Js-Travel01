import React from 'react'
import Hero from '../Hero'
import Booking from '../Booking'
import About from '../About'
import Features from '../Features'
import PricingTable from '../PricingTable'
import ServiceCards from './Content/ServiceCards'

function Home() {
  return (
    <div>
        
        <Hero/>
        <Booking/>
        <Features/>
        <ServiceCards/>
        <PricingTable/>
        <About/>


    </div>
  )
}

export default Home