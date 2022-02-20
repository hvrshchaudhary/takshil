import React from 'react';
import CategoryItem from '../Components/CategoryItem';
import Conviniences from '../Components/Conviniences';
import Intro from '../Components/Intro';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import ContactUs from './ContactUs';

const Home = () => {
  return (
  <>
    <Navbar/>
    <Slider/>
    <Conviniences/>
    <CategoryItem/>
    <Intro/>
    <ContactUs/>
  </>
  );
};

export default Home;
