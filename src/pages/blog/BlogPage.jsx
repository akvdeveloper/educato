import React from 'react'
import Header from '../../components/header'
import Bredcum from '../../components/Bredcum/Bredcum'
import BlogSection from '../../components/Blog/BlogSection'

const BlogPage = () => {
  return (
    <>
        <Header />
        <Bredcum title="Home" subtitle="Blog" />
        <BlogSection />
    </>
  )
}

export default BlogPage