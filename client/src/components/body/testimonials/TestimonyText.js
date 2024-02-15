import React from 'react'
import Stars from './Stars'

const TestimonyText = ({data}) => {
  return (
    <div className='container d-block m-auto text-center'>
        {data.description}
        <Stars star={data.star}/>
    </div>
  )
}

export default TestimonyText