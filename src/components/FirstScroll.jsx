import React from 'react';
import '../style/FirstScroll.css';
import candles from '../assets/home image-1.png';
import firstimg from '../assets/home image-2.png';
import secondimg from '../assets/home image-3.png';
import thirdimg from '../assets/home image-4.png';
import Carousel from 'react-bootstrap/Carousel';
import slide from '../assets/carosel img.png';
import diffuser from '../assets/diffuser.png'

const FirstScroll = () => {
  return (
      <div className='second-layer'>
        <div className='container first-layer'>
        <div className='row mt-2'>
          <div className='category col-lg-2 text-center border border-2 rounded'>
            <h4 className='border-bottom border-2'>Categories</h4>
            <p>All</p>
            <p>Male</p>
            <p>Female</p>
            <p>Combo Package</p>
            <p>Designer Package</p>
            <p>Scented Candles</p>
            <p>Reeds and Diffusers</p>
            <p>Sprays</p>
          </div>
          <div className='carosel col-lg-6 border border-2 rounded'>
          <Carousel>
      <Carousel.Item interval={5000}>
       <img className='w-100 d-block' src={slide} alt="" />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
       <img className='w-100 d-block' src={slide} alt="" />
      </Carousel.Item>
      <Carousel.Item   interval={5000}>
       <img className='w-100 d-block' src={slide} alt="" />
      </Carousel.Item>
    </Carousel>
          </div>
          <div className='package col-lg-2 border border-2 border-bottom '>
            <img className=''  src={candles} alt="" />
            <img className='' src={firstimg} alt="" />
            <img className='border-top border-2' src={secondimg} alt="" />
            <img className='border-top border-2' src={thirdimg} alt="" />
          </div>
        </div>
      </div>
      </div>
  )
}

export default FirstScroll