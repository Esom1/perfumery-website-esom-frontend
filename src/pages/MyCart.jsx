import React from 'react'
import '../style/MyCart.css'
import { Link } from 'react-router-dom';
import ysl from '../assets/ysl.png';
import van from '../assets/van.png';
import gift from '../assets/ph_gift.png';
import vector from '../assets/Vector.svg';


const MyCart = () => {
  return (
    <div>
      <div className='container'>
        <h2>My Cart</h2>
        <p>welcome back!</p>
     <div className='row diff'>
     <div className='col-lg-9'>
        <div className='around '>
      <div className='d-flex justify-content-between down'>
          <p>Product</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className='d-flex justify-content-between align-items-center mb-2 light'>
          <div className='d-flex gap-2'>
          <img className='ysl' src={ysl} alt="" />
          <p className='mt-5'>YSL Libre Intense EDP - 90ML</p>
          </div>
         <div className='bord d-flex gap-3'>
         <button className='plus'>+</button>
         <p className='one pt-3'>1</p>
          <button className='plus'>-</button>
          <div className='text-center remove'> <button className='plus'>Remove</button></div>
         </div>
         <p>#24,000</p>
        </div>
      </div>
      <div className='d-flex justify-content-between align-items-center mt-3 gift p-2'>
       <div className='d-flex gap-4'> <img className='gifty mt-2' src={gift} alt="" />
        <p className='pt-2'>do you want a gift wrap? Only #1,000</p></div>
        <button className='btn gift-btn'>Add a gift wrap</button>
      </div>
      <div className='d-flex justify-content-between align-items-center mt-3  mb-5 gift p-2'>
       <div className='d-flex gap-4'> <img className='gifty mt-2' src={van} alt="" />
        <p className='pt-2'>Estimate delivery</p></div>
       <img className='vector' src={vector} alt="" />
      </div>
      <h5>Our guarantees</h5>
     <div className='d-flex gift justify-content-between pt-3 mb-4 end-line'>
     <div className='text-center'>
        <p>Premium Quality</p>
        <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum dicta officiis!</p>
      </div>
      <div className='text-center'>
        <p>Excellent Customer Support</p>
        <p className='lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet magni recusandae ea!</p>
      </div>
      <div className='text-center'>
        <p>Excellent Customer Support</p>
        <p className='lorem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio impedit laboriosam exercitationem!</p>
      </div>
     </div>
        </div>
       <div className='col-lg-3'>
       <div className='gifting'>
          <div className='d-flex justify-content-between align-items-center total'>
          <h5>Total</h5>
          <p>#24,000</p>
          </div>
         <div className='d-flex justify-content-between align-items-center order'>
         <p>Orders Instructions </p>
          <img className='vector' src={vector} alt="" />
         </div>
          <p  className='vat'>VAT and <span>shipping</span> calculated at checkout</p>
          <button className='btn check-out'>Check Out</button>
        </div>
       </div>
     </div>
      </div>
    </div>
  )
}

export default MyCart