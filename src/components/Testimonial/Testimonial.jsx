import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './testimonial.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// import react rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';
import useReview from '../../hooks/useReview';



const Testimonial = () => {
    const [review, isLoading] = useReview()
    return (
        <section className='testimonial'>
            {isLoading && <p>loading...</p>}

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {review.map((singleReview, index) => {
                    return <SwiperSlide key={index}>
                        <ul className='testimonial-slide'>
                            <li>
                                <Rating
                                    value={singleReview.rating}
                                    readOnly>
                                </Rating>
                            </li>
                            <li><FaQuoteLeft style={{ fontSize: "5rem", margin: "1rem 0" }} /></li>

                            <li> {singleReview.details} </li>
                            <li>{singleReview.name}</li>
                        </ul>
                    </SwiperSlide>
                })
                }

            </Swiper>
        </section>
    )
}

export default Testimonial
