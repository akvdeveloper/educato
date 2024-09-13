import React from 'react'
import Header3 from '../../components/header3'
import CollegeSlider from '../../components/HomeThree/CollegeSlider'
import CollegeService from '../../components/HomeThree/CollegeService'
import AboutCollege from '../../components/HomeThree/AboutCollege'
import VideoThree from '../../components/HomeThree/VideoThree'
import Expert from '../../components/HomeThree/Expert'
import Brand from '../../components/Brand'
import Recent from '../../components/HomeThree/Recent'
import OnGoingClasses from '../../components/HomeThree/OnGoingClasses'

const HomeThree = () => {
  return (
    <>
        <Header3 />
        <CollegeSlider />
        <CollegeService />
        <AboutCollege />
        <OnGoingClasses />
        <VideoThree />
        <Expert />
        <Brand />
        <Recent />
        
    </>
  )
}

export default HomeThree