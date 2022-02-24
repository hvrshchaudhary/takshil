import React, { useEffect, useRef } from 'react';
import Stats from '../Components/Stats';
import Intro from '../Components/Intro';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import ContactUs from './ContactUs';
import ShopByCategory from '../Components/ShopByCategory';
import FAQ from '../Components/FAQ';

const Home = () => {
  const contactRef = useRef(null)
  const aboutRef = useRef(null)
  const productRef = useRef(null)
 
  return (
  <>
    <Navbar contactRef = {contactRef} aboutRef={aboutRef} productRef={productRef}/>
    <Slider contactRef={contactRef}/>
    <Stats/>
    <span ref={productRef}>
    <ShopByCategory contactRef ={contactRef}/>
    </span>
    <FAQ/>
    <span ref={aboutRef}>
    <Intro/>
    </span>
    <span ref={contactRef}>
    <ContactUs />
    </span>
  </>
  );
};

export default Home;
