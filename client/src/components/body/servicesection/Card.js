import React from 'react'
import CardItem from './CardItem'
import img from '../home/programmer_profile.png'

const Card = () => {
  const cards=[
  {
    image:img, 
    description:" lorem Line 7:9:  img elements must have an alt prop,"+ 
    "either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text"+
    "src\components\body\servicesection\CardItem.js"+
    "Line 8:13:  img elements must have an alt prop, either with meaningful text,"+ 
    "or an empty string for decorative images  jsx-a11y/alt-text"+
    "webpack compiled with 1 warning",
    overlayText:"React"
    
  },
  {
    image:img, 
    description:" lorem Line 7:9:  img elements must have an alt prop,"+ 
    "either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text"+
    "src\components\body\servicesection\CardItem.js"+
    "Line 8:13:  img elements must have an alt prop, either with meaningful text,"+ 
    "or an empty string for decorative images  jsx-a11y/alt-text"+
    "webpack compiled with 1 warning" ,
    overlayText:"Material UI"
    
  },
  {
    image:img, 
    description:" lorem Line 7:9:  img elements must have an alt prop,"+ 
    "either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text"+
    "src\components\body\servicesection\CardItem.js"+
    "Line 8:13:  img elements must have an alt prop, either with meaningful text,"+ 
    "or an empty string for decorative images  jsx-a11y/alt-text"+
    "webpack compiled with 1 warning" ,
    overlayText:"Bootstrap and CSS"
    
  }
  
]
  return (
    <div className=' container'>
        <CardItem cards={cards}/>
    </div>
  )
}

export default Card