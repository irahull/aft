import React from 'react';
import "./gridbox.scss"
import GridBox1 from "../../imgs/grid1.png";
import GridBox2 from "../../imgs/grid2.png"
import GridBox3 from "../../imgs/grid3.png"
import GridBox4 from "../../imgs/grid4.png"
import LightOne from "../../imgs/green-light.png"
// import LightOne from "../../imgs/Group 1133.png"
import LightTwo from "../../imgs/blue-light.png"
import LightThree from "../../imgs/black-light.png"
import LightFour from "../../imgs/black-light2.png"

const GridBox = () => {
  return (
    <div className='gridbox-main'>
        <div className="gridbox-wrapper">
            <div className="gridbox1">
                <img src={LightOne} alt="" className='light-green' />
                <img src={GridBox1} alt="" className='content-img' />
            </div>
            <div className="gridbox2">
            <img src={LightTwo} alt="" className='light-blue' />
                <img src={GridBox2} alt="" className='content-img' />
            </div>
            <div className="gridbox3">
            <img src={LightThree} alt="" className='light-black' />
                <img src={GridBox3} alt="" className='content-img' />
            </div>
            <div className="gridbox4">
            <img src={LightFour} alt="" className='light-black2' />
                <img src={GridBox4} alt="" className='content-img' />
            </div>
        </div>
    </div>
  )
}

export default GridBox