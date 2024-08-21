import React  from 'react'
import Slider from '../../slider/Slider'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import SwipeSlider from '../../slider/SwipeSlider'
import Featured from '../../shared/featured/Featured'
import CallUs from '../../components/CallUs/CallUs'
import Banner from '../../components/banner/Banner'
import Testimonial from '../../components/Testimonial/Testimonial'
import HomeRecommendMenu from '../../components/recommendMenu/HomeRecommendMenu'
import HomeMenu from '../../components/HomeMenu/HomeMenu'
import {Helmet} from "react-helmet";
import Pagination from '../../components/pagination/Pagination'

const Home = () => {
  
  return (
    <>
    <Helmet>     
       <title>Home</title>
       <link rel="icon" type="x-icon" href="https://res.cloudinary.com/doolocyaf/image/upload/v1716610835/Resturant%20Project/home_icon_xh5cjh.jpg" />             
     </Helmet>

    <Slider></Slider>

    <SectionTitle subTitle="from 10 am to 9 pm " title="order online">
    </SectionTitle>
    
    <SwipeSlider></SwipeSlider>

    <Featured 
     heading="our restaurant"
     details="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, commodi repudiandae! Maiores ducimus facere fugiat quia laboriosam veritatis culpa, laborum laudantium officia quo impedit expedita deserunt eaque. Perspiciatis, pariatur ullam."
     imageUrl="https://res.cloudinary.com/doolocyaf/image/upload/v1720286157/Rectangle_9_lnvuko.png"
    >
    </Featured>

    <HomeMenu></HomeMenu>

    <CallUs></CallUs>

    <HomeRecommendMenu></HomeRecommendMenu>
    <Pagination></Pagination>

    <Banner></Banner>
    <Testimonial></Testimonial>
    
    </>
  )
}

export default Home
