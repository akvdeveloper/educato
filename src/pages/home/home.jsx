import React from 'react'
import SliderOne from '../../components/Home/SliderOne'
import About from '../../components/Home/About'
import Courses from '../../components/Home/Cousrses'
import Shep from '../../components/Home/Shep'
import Event from '../../components/Home/Event'
import Scholarship from '../../components/Home/Scholarship'
import Frequently from '../../components/Home/Frequently'
import Video from '../../components/Home/Video'

import Search from '../../components/Home/Search'
import Admission from '../../components/Home/Admission'
import RedSlider from '../../components/Home/RedSlider'
import Blog from '../../components/Home/Blog'
import Subscribe from '../../components/Home/Subscribe'
import Header from '../../components/header'
import UnversityTestmonial from '../../components/Home/UnversityTestmonial'



const Home = () => {
  return (
    <>
      <Header />
      <SliderOne />
      <About />
      <Courses />
      <Shep />
      <Event />
      <Scholarship />
      <Frequently />
      <Video />
      <UnversityTestmonial />
      <Search />
      <Admission />
      <RedSlider />
      <Blog />
      <Subscribe />
    </>
  )
}

export default Home