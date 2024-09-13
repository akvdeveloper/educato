import React from 'react'
import Header from '../../components/header'
import Bredcum from '../../components/Bredcum/Bredcum'
import Error from '../../components/Error'

const ErrorPage = () => {
  return (
    <>
      <Header />
      <Bredcum title="Home" subtitle="404 Error" />
      <Error />
    </>
  )
}

export default ErrorPage