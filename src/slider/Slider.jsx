import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Slider = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} swipeable={true}>
            <div>
                <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716133137/Resturant%20Project/01_hheh1o.jpg" />              
            </div>
            
            <div>
                <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716133136/Resturant%20Project/03_fzzexs.png" />
                
            </div>
            <div>
                <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716133137/Resturant%20Project/02_goeoq5.jpg" />
                
            </div>
            <div>
                <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716133137/Resturant%20Project/04_cnlmoj.jpg" />
                
            </div>
            <div>
                <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716133137/Resturant%20Project/banner_cjb1jn.jpg" />
                
            </div>
            <div>
                <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716133137/Resturant%20Project/06_rzad5e.png" />
                
            </div>
            <div>
                <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716133136/Resturant%20Project/05_aw2yyj.png" />
                
            </div>
        </Carousel>
    )
}

export default Slider
