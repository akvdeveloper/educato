import React from 'react'
import Header from '../../components/header'
import TeacherTeam from '../../components/Teacher/TeamTeacher'
import Bredcum from '../../components/Bredcum/Bredcum'

export const TeacherPage = () => {
  return (
    <>  
        <Header />
        <Bredcum title="Home" subtitle="Our Teacher" />
        <TeacherTeam />
    </>
  )
}
