import React from 'react'
import './index.css'
import { ReactTyped } from 'react-typed'


const CardItem = ({ cards }) => {
    //console.log(cards)
    return (
        <div className='d-xs-block d-md-flex justify-content-center m-auto card-hover'>
            {cards.map((card,index) => (
                <div key={index}  className='card container m-3 '>
                    <div className='card-image my-3'>
                        <img maxWidth={400} maxHeight={250} className='img-fluid' src={card.image} />
                        <p className='overlay-text'>
                            <ReactTyped
                            className='typed-text'
                            strings={[card.overlayText]}
                            backSpeed={30}
                            typeSpeed={30}
                            loop
                        /></p>
                    </div>
                    <div className='card-text card-description'>
                        <p>
                            {card.description}
                            
                        </p>
                    </div>
                </div>
            )
            )}

        </div>
    )
}

export default CardItem