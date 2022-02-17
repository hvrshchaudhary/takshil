import React from 'react';
// import Categories from '../Components/Categories';
import CategoryItem from '../Components/CategoryItem';
import Footer from '../Components/Footer';
import Intro from '../Components/Intro';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';

const Home = () => {
  return (
  <>
    <Navbar/>
    <Slider/>
    <CategoryItem/>
    <Intro/>
    <Footer/>
  </>
  );
};

export default Home;
