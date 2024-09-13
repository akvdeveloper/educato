import React from 'react'
import Header from '../../components/header'
import Bredcum from '../../components/Bredcum/Bredcum'
import MainGallery from '../../components/MainGallery/MainGallery'
import Brand from '../../components/Brand'

const Gallery = () => {
  return (
    <>
        <Header />
        <Bredcum title="Home" subtitle="Our Gallery" />
        <MainGallery />
        <Brand />
    </>
  )
}

export default Gallery