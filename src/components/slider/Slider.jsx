import React from "react";
import './slider.scss';
import blue from "../../assets/images/blue.svg";
import moon from "../../assets/images/moon.svg";
import nation from "../../assets/images/nation.svg";
import stepn from "../../assets/images/stepn.svg";
import swim from "../../assets/images/swim.svg";

const Slider = () => { 
   return (
    <div class="sol__slider main-padding">
      <h1>TRENDING PROJECTS THIS MONTH</h1>
      <div class="sol__slide-track">
        <div class="sol__slide">
          <img src={blue} height="100" width="250" alt="" />
        </div>
        <div class="sol__slide">
          <img src={moon} height="100" width="250" alt="" />
        </div>
        <div class="sol__slide">
          <img src={nation} height="100" width="250" alt="" />
        </div>
        <div class="sol__slide">
          <img src={stepn} height="100" width="250" alt="" />
        </div>
        <div class="sol__slide">
          <img src={swim} height="100" width="250" alt="" />
        </div>
        <div class="sol__slide">
          <img src={blue} height="100" width="250" alt="" />
        </div>
        <div class="sol__slide">
          <img src={moon} height="100" width="250" alt="" />
        </div>
        <div class="sol__slide">
          <img src={nation} height="100" width="250" alt="" />
        </div>
        <div class="sol__slide">
          <img src={stepn} height="100" width="250" alt="" />
        </div>
        <div class="sol__slide">
          <img src={swim} height="100" width="250" alt="" />
        </div>
        <div class="sol__slide">
          <img src={blue} height="100" width="250" alt="" />
        </div>
        <div class="sol__slide">
          <img src={moon} height="100" width="250" alt="" />
        </div>
        <div class="sol__slide">
          <img src={nation} height="100" width="250" alt="" />
        </div>
        <div class="sol__slide">
          <img src={stepn} height="100" width="250" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Slider