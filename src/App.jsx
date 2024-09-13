import React from 'react';
import './app.css';
import './assets/css/bootstrap.min.css'
import './assets/css/animate.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/dripicons.css'
import './assets/css/slick.css'
import './assets/css/meanmenu.css'
import './assets/css/default.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Header2 from './components/header2';
import Header3 from './components/header3';
import Home from './pages/home/home';
import Contact from './pages/contact/Contact';
import AboutPage from './pages/about/AboutPage';
import HomeTwo from './pages/home/HomeTwo';
import HomeThree from './pages/home/HomeThree';
import ErrorPage from './pages/error/ErrorPage';
import BlogPage from './pages/blog/BlogPage';
import BlogDetails from './pages/blog/BlogDetails';
import { TeacherPage } from './pages/Teacher/TeacherPage';
import TeacherDetailsPage from './pages/Teacher/TeacherDetailsPage';
import Faq from './pages/faq/Faq';
import Pricing from './pages/pricing/Pricing';
import Gallery from './pages/gallery/Gallery';
import EducationEvent from './pages/events/EducationEvent';
import EducationalEventDetails from './pages/events/EducationalEventDetails';
import CourseOneMain from './pages/course/CourseOneMain';
import CourseTwoMain from './pages/course/CourseTwoMain';
import CourseDetailsMainOne from './pages/coursedetail/CourseDetailsMainOne';
import CourseDetailsMainTwo from './pages/coursedetail/CourseDetailsMainTwo';
const App = () => {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home-two' element={<HomeTwo />} />
          <Route path='/home-three' element={<HomeThree />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/404-error' element={<ErrorPage />} />
          <Route path='/blog-details' element={<BlogDetails />} />
          <Route path='/team' element={<TeacherPage />} />
          <Route path='/team-single' element={<TeacherDetailsPage />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/projects' element={<Gallery />} />
          <Route path='/event' element={<EducationEvent />} />
          <Route path='/single-event' element={<EducationalEventDetails />} />
          <Route path='/courses' element={<CourseOneMain />} />
          <Route path='/courses-2' element={<CourseTwoMain />} />
          <Route path='/single-courses' element={<CourseDetailsMainOne />} />
          <Route path='/single-courses-2' element={<CourseDetailsMainTwo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}


export default App