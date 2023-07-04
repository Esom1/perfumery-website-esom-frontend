import React from 'react';
import '../style/Information.css'
import bus from '../assets/bus.png';
import delivery from '../assets/delivery.png';
import pay from '../assets/pay.png';
import tag from '../assets/tag.png'

const Information = () => {
  return (
    <div className='info-layer '>
      <div className='container'>
       <div className='d-flex gap-5 pt-5'>
       <div className='d-flex gap-2'>
        <img className='bus' src={bus} alt="" />
        <p className='mt-2'>Nationwide Delivery <br /> Anywhere Anytime</p>
      </div>
      <div className='d-flex gap-2'>
        <img className='bus' src={delivery} alt="" />
        <p className='mt-2'>Same Day Delivery <br />In Lagos Only</p>
      </div>
      <div className='d-flex gap-2'>
        <img className='bus' src={pay} alt="" />
        <p className='mt-2'>Pay On Delivery <br />In Lagos Only</p>
      </div>
      <div className='d-flex gap-2'>
        <img className='bus' src={tag} alt="" />
        <p className='mt-2'>Lowest Price <br />Best Deal</p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Information