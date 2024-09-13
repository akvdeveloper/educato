import React from 'react'
import Bredcum from '../../components/Bredcum/Bredcum'
import GetTouch from '../../components/Contact/GetTouch'
import GetMap from '../../components/Contact/GetMap'
import GetForm from '../../components/Contact/GetForm'
import Header from '../../components/header'
const Contact = () => {
  return (
    <>
      <Header />
      <Bredcum title="Home" subtitle="Contact Us" />
      <GetTouch />
      <GetMap />
      <GetForm />
     
    </>
  )
}

export default Contact