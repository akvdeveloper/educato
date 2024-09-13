import React from 'react'
import Header from '../../components/header'
import Bredcum from '../../components/Bredcum/Bredcum'
import Brand from '../../components/Brand'
import CourseOne from '../../components/Courses/CourseOne'

const CourseOneMain = () => {
  return (
    <>
        <Header />
        <Bredcum title="Home" subtitle="Courses" />
        <CourseOne />
        <Brand />
    </>
  )
}

export default CourseOneMain