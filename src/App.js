import React, { useState, useEffect } from 'react';

import './App.css';
import data from './model/db';
import Slider from './Slider';


function App() {

  const [state, setState] = useState({
    slides: [],
    xIndex: 0,
  });
  useEffect(() => {
    //fetch slidesArray and set array to slides
    //here getting data from js file 
    setState(prevState => {
      return { ...prevState, slides: data }
    });

  }, []);

  // creating a autoplay effect
  useEffect(() => {
    let autoplay = setInterval(() => {
      goToNextSlide()
    }, 5000)
    return () => {
      clearInterval(autoplay);
    }
  }, [state.xIndex])

  const goToPrevSlide = () => {
    let xIndex = state.xIndex;
    if (xIndex === 0) {
      xIndex = -(state.slides.length - 1) * 100;
    } else {
      xIndex = xIndex + 100;
    }
    setState(prevState => {
      return { ...prevState, xIndex: xIndex }
    })
  }
  const goToNextSlide = () => {
    console.log("called", state.xIndex)
    let xIndex = state.xIndex;
    if (xIndex === -(state.slides.length - 1) * 100) {
      xIndex = 0;
    } else {
      xIndex = xIndex - 100;
    }
    setState(prevState => {
      return { ...prevState, xIndex: xIndex }
    })
  }

  return (
    <div className="App">
      <Slider slides={state.slides}
        goToPrevSlide={goToPrevSlide}
        goToNextSlide={goToNextSlide}
        xIndex={state.xIndex} />
    </div>
  );
}

export default App;
