import React, { Component } from 'react'
import { Footer, Blog, Features, Header, WhatGPT3, Possibility } from './Containers';
import {Cta, Brand, Navbar} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      <Navbar />
      <Header />
      </div> 
      <Brand /> 
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App