import React from 'react'
import './index.css'
import { ReactTyped } from 'react-typed'


const CardItem = ({ cards }) => {
    //console.log(cards)
    return (
        <div className='d-xs-block d-md-flex justify-content-center mx-auto mb-3 card-hover'>
            {cards.map((card,index) => (
                <div key={index}  className='card container m-3 '>
                    <div className='card-image my-3'>
                        <img maxWidth={350} maxHeight={200} className='img-fluid cimg' src={card.image} />
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
                    <button className='btn btn-success btn-outline-warning'>Learn More...</button>
                    <a href='https://www.github.com/SEWLESEWBIAZEN' className='text-center mx-auto my-3'>Find on Github</a>
                </div>
            )
            )}
        </div>
    )
}

export default CardItem