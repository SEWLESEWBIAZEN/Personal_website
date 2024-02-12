import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './index.css'

const Next = () => {
  return (
    <FontAwesomeIcon className="m-auto arrow-icon" icon={faArrowRight} onClick={()=>alert("Next icon clicked")} />
  )
}

export default Next