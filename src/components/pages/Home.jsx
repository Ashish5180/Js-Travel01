import React from 'react'
import Hero from '../Hero'
import Booking from '../Booking'
import About from '../About'
import Features from '../Features'
import CTA from '../Cta'
import ServiceDescriptions from '../ServiceDescriptions'
import PricingTable from '../PricingTable'
import Footer from '../Footer'

function Home() {
  return (
    <div>
        
        <Hero/>
        <Booking/>
        <Features/>
        <ServiceDescriptions/>
        <PricingTable/>
        <About/>


    </div>
  )
}

export default Home