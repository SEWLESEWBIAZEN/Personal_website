import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './index.css'

const Previous = () => {
  return (
    <FontAwesomeIcon className="m-auto arrow-icon" icon={faArrowLeft} />
  )
}

export default Previous