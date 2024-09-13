import React from 'react'
import Header from '../../components/header'
import Bredcum from '../../components/Bredcum/Bredcum'
import Brand from '../../components/Brand'
import CourseDetailsOne from '../../components/CoursesDetails/CourseDetailsOne'
const CourseDetailsMainOne = () => {
  return (
    <>
        <Header />
        <Bredcum title="Home" subtitle="Courses Details Two" />
        <CourseDetailsOne />
        <Brand />
    </>
  )
}

export default CourseDetailsMainOne