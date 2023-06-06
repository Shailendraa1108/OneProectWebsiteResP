import React from 'react'
import { Carousel } from "react-responsive-carousel"
import img1 from '../assets/Coro.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Service() {
    return (
        <div className='Service'>
            <Carousel
                infiniteLoop
                showStatus={false}
                showArrows={false}
                interval={1000}
                showThumbs={false}

            >
                <div>
                    <img src={img1} alt="serverError" />
                    <p className='legend'>fullStatck</p>
                </div>
                <div>
                    <img src={img1} alt="serverError" />
                    <p className='legend'> hiii peeer to peer broo....</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Service