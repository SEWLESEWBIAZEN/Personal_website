import React from 'react'
import Home from './home/Index'
import Services from './servicesection/Index'
import Testimonials from './testimonials/Index'

const Index = () => {
  return (
    <div>
        <Home/>
        <hr/>
        <Services/>
        <Testimonials/>
    </div>
  )
}

export default Index