import React from 'react'
import TestimonyPicture from './TestimonyPicture'
import TestimonyText from './TestimonyText'
import './index.css'

const Index = () => {
  return (
    <div className='container container-testimonial d-xs-block d-sm-flex mb-4 p-4'>
     
        <TestimonyPicture/>
        <TestimonyText/>
        
    </div>
  )
}

export default Index