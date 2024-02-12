import React from 'react'
import PIMG from '../home/profile.jpg'

const TestimonyPicture = () => {
  return (
    <div className='m-auto d-block'>
      <img className='pimg' src={PIMG} width={100} height={100} alt='Progile Image'></img>
      <h6>Jhon Doe</h6>
      </div>
  )
}

export default TestimonyPicture