import React from 'react'
import profile from './programmer_profile.png'

const Profile = () => {
  return (
    <div className=' container  mx-auto my-3'>
        <img maxWidth={400} maxHeight={400} className='img-fluid' src={profile}/>
    </div>
  )
}

export default Profile