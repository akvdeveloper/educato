import React from 'react'
import Header from '../../components/header'
import Bredcum from '../../components/Bredcum/Bredcum'
import Brand from '../../components/Brand'
import FaqsMain from '../../components/FAQS/FaqsMain'

const Faq = () => {
  return (
    <>
        <Header />
        <Bredcum title="Home" subtitle="FAQS" />
        <FaqsMain />
        <Brand />
    </>
  )
}

export default Faq