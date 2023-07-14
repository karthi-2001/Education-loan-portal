import React from 'react'
import './Home.css';
import Slider from './Slider';
import sliderImages from './SliderImages';
import Testimonial from './Testimonial';
import Loans from './Loans';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';

function Home() {
  return (
    <>
      <Navbar/>
      <div className='scrollable-content'>
        <section id='home'>
          <Slider images={sliderImages}/>
          <section id='about'>
            <About/>
          </section>
          <section id='loans'>
            <Loans/>
          </section>
          <section id='testimonial'>
            <Testimonial/>
          </section>
          <section id='contact'>
            <Contact/>
          </section>
          <Footer/>
        </section>
      </div>
  
      
      {/* <AboutUs/>
      <section id='testimonial'>
        <Testimonial />
      </section>
      <ContactUs/> */}
    </>
  )
}
export default Home;
