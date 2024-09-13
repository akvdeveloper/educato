import React from 'react'
import Header from '../../components/header'
import Bredcum from '../../components/Bredcum/Bredcum'
import BlogDetailSection from '../../components/Blog/BlogDetailSection'

const BlogDetails = () => {
  return (
    <>
        <Header />
        <Bredcum title="Home" subtitle="Blog Details" />
        <BlogDetailSection />
    </>
  )
}

export default BlogDetails