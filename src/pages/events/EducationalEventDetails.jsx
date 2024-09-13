import React from 'react'
import Header from '../../components/header'
import Bredcum from '../../components/Bredcum/Bredcum'
import Brand from '../../components/Brand'
import MainEventDetails from '../../components/InstituteEvents/MainEventDetail'

const EducationalEventDetails = () => {
  return (
    <>
        <Header />
        <Bredcum title="Home"  subtitle="Event Details" />
        <MainEventDetails />
        <Brand />
    </>
  )
}

export default EducationalEventDetails