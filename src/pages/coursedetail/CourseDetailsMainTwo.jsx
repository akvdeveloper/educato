import React from 'react'
import Header from '../../components/header'
import Bredcum from '../../components/Bredcum/Bredcum'
import Brand from '../../components/Brand'
import CourseDetailsTwo from '../../components/CoursesDetails/CourseDetailsTwo'
const CourseDetailsMainTwo = () => {
  return (
    <>
        <Header />
        <Bredcum title="Home" subtitle="Course Details Two" />
        <CourseDetailsTwo />
        <Brand />
    </>
  )
}

export default CourseDetailsMainTwo