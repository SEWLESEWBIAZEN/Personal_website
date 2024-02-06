import React from 'react'
import img from '../home/programmer_profile.png'
import './index.css'

const CardItem = () => {
    return (
        <div className='d-xs-block d-md-flex justify-content-between m-auto card-hover'>
            <div className='card container m-3 '>
                <div className='card-image my-3'>
                    <img maxWidth={400} maxHeight={250} className='img-fluid' src={img} />
                </div>
                <div className='card-text'>
                    <p>
                        lorem Line 7:9:  img elements must have an alt prop, 
                        either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
                        src\components\body\servicesection\CardItem.js
                        Line 8:13:  img elements must have an alt prop, either with meaningful text, 
                        or an empty string for decorative images  jsx-a11y/alt-text
                        webpack compiled with 1 warning
                    </p>
                </div>
            </div>

            <div className='card container m-3 '>
                <div className='card-image my-3'>
                    <img maxWidth={400} maxHeight={250} className='img-fluid' src={img} />

                </div>
                <div className='card-text'>
                    <p>
                        lorem Line 7:9:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

                        src\components\body\servicesection\CardItem.js
                        Line 8:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

                        webpack compiled with 1 warning

                    </p>
                </div>
            </div>

            <div className='card container m-3 '>
                <div className='card-image my-3'>
                    <img maxWidth={400} maxHeight={250} className='img-fluid' src={img} />

                </div>
                <div className='card-text'>
                    <p>
                        lorem Line 7:9:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

                        src\components\body\servicesection\CardItem.js
                        Line 8:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

                        webpack compiled with 1 warning

                    </p>
                </div>
            </div>
            <div className='card container m-3 '>
                <div className='card-image my-3'>
                    <img maxWidth={400} maxHeight={250} className='img-fluid' src={img} />

                </div>
                <div className='card-text'>
                    <p>
                        lorem Line 7:9:  img elements must have an alt prop, either with meaningful text,
                        or an empty string for decorative images  jsx-a11y/alt-text
                        img elements must have an alt prop, either with meaningful text, or an empty string
                        for decorative images  jsx-a11y/alt-text
                    </p>
                </div>
            </div>

        </div>
    )
}

export default CardItem