import React from 'react'
import Bredcum from '../../components/Bredcum/Bredcum'
import University from '../../components/About/University'
import Scholarship from '../../components/Home/Scholarship'
import Frequently from '../../components/Home/Frequently'
import Campus from '../../components/About/Campus'
import Brand from '../../components/Brand'
import UnversityTestmonial from '../../components/Home/UnversityTestmonial'
import Header from '../../components/header'


const AboutPage = () => {
  return (
    <>
        <Header />
        <Bredcum title="Home" subtitle="About Us" />
        <University />
        <Scholarship />
        <Frequently />
        <Campus />
        <UnversityTestmonial />
        <Brand />

    </>
  )
}

export default AboutPage