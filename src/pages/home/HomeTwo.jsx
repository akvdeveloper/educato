import React from 'react'
import Header2 from '../../components/header2'
import SliderTwo from '../../components/HomeTwo/Slider'
import GetChild from '../../components/HomeTwo/GetChild'
import GetService from '../../components/HomeTwo/GetService'
import AboutKids from '../../components/HomeTwo/AboutKids'
import GetGoing from '../../components/HomeTwo/GetGoing'
import KidAboutVideo from '../../components/HomeTwo/KidsAboutVideo'
import EventChild from '../../components/HomeTwo/EventChild'
import Teacher from '../../components/HomeTwo/Teacher'
import ChildTestimonial from '../../components/HomeTwo/ChildTestimonial'
import SchoolBlog from '../../components/HomeTwo/SchoolBlog'
import SchoolBlueSlider from '../../components/HomeTwo/SchoolBlueSlider'


const HomeTwo = () => {
  return (
    <>
      <Header2 />
      <SliderTwo />
      <GetChild />
      <GetService />
      <AboutKids />
      <GetGoing />
      <KidAboutVideo />
      <EventChild />
      <Teacher />
      <ChildTestimonial />
      <SchoolBlog />
      <SchoolBlueSlider />
    </>
  )
}

export default HomeTwo