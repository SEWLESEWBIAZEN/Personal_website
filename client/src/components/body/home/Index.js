import React from 'react'
import Title from './Title'
import Profile from './Profile'

const Index = () => {
  return (
    <div style={{marginTop:"3.5rem",marginBottom:"2rem",paddingTop:"1rem"}} className='container  d-xs-block d-md-flex justify-content-evenly'>
        <Title/>
        <Profile/>
    </div>
  )
}

export default Index