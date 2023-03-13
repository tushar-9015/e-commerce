import React from 'react'
import Food from './components/Food';
import HeadlineCard from './components/HeadlineCard';
import Hero from './components/Hero';
import Navbar from './components/Navbar'


function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <HeadlineCard />
      <Food />
    </div>
  );
}

export default App;
