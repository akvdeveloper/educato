import React from 'react'
import Header from '../../components/header'
import Bredcum from '../../components/Bredcum/Bredcum'
import TeacherDetails from '../../components/Teacher/TeacherDetails'

const TeacherDetailsPage = () => {
  return (
    <>
        <Header />
        <Bredcum title="Home" subtitle="Teacher Details" />
        <TeacherDetails />

    </>
  )
}

export default TeacherDetailsPage