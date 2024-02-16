import React, {Suspense} from 'react'
import {useImage} from 'react-image'

const ReactProfile=() =>{
  const {src} = useImage({
    srcList: ['../body/home/profile.jpg','../body/home/profile.jpg'],
  })

  return <img src={src} />
}
export default ReactProfile