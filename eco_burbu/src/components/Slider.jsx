import '../Slider.css';
import React, { useState } from 'react';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material/';
import {sliderItems} from "../data"

let transX = 0;
let slideIndex = 0;

const Slider = () => {
  const [customStyle, setCustomStyle] = useState({});

  const handleClick = (direction) => {
      if (direction === "left") {
          slideIndex = slideIndex > 0 ? slideIndex-1 : (sliderItems.length -1);
        } else {
            slideIndex = slideIndex < (sliderItems.length - 1) ? slideIndex+1 : 0;
        }
        transX = slideIndex * -100
        setCustomStyle({ transform: 'translateX(' + transX + "vw)"});
  }
    
  return (
    <div className="Container_Slider" >
        <div className="Arrow Arrow_left" onClick={() => handleClick('left')}>
            <KeyboardArrowLeft />
        </div>
        <div className="Wrapper_Slider" style={customStyle}>
            {sliderItems.map(item => (
            <div key={item.id} className= { "Slide " + item.background}>
                <div className="ImgContainer" >
                    <div className="Image" >
                        <img src={item.img} alt="slider"/>   
                    </div>
                </div>
                <div className="InfoContainer">
                    <h1 className="Title" >{item.title}</h1>
                    <p className="Description">{item.desc}</p>
                    <button className="Button">Ver más</button>
                </div>
            </div>
            ))};
            </div>
        
        <div className="Arrow Arrow_right" onClick={() => handleClick('right')}>
            <KeyboardArrowRight />
        </div>
    </div>

  )
}

export default Slider
