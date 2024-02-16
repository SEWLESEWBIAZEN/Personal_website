import React from 'react'
import Main from './Main'
import './cv.css'
import Profile from './Profile'

const MyCV = () => {
  return (
    <div className='cv-container container bg-white d-flex '>
        <Profile/>
        <Main/>
        </div>
  )
}

export default MyCV