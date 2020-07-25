import React from 'react'

import './slider.scss';

export default function Slider(props) {

    return (
        <div className="slider">
            {props.slides.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{ transform: `translateX(${props.xIndex}%)` }}>
                        <img src={item.src} alt="imges" className="slideImg" />
                    </div>
                )
            })}
            <button id="prevSlide" onClick={props.goToPrevSlide}>{`<`}</button>
            <button id="nextSlide" onClick={props.goToNextSlide}>{`>`}</button>
        </div>
    )
}
