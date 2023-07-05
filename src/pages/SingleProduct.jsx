import React from 'react';
import '../style/SingleProduct.css'
import UseFetch from '../hooks/UseFetch';
import {useParams, Link } from 'react-router-dom'
import axios from 'axios';
import bus from '../assets/bus.png'
import deliver from '../assets/delivery.png'
import pay from '../assets/pay.png'
import tag from '../assets/tag.png'


const SingleProduct = () => {
  const {id} = useParams()
  const { data,loading } = UseFetch(`https://perfumerysite.onrender.com/perfumery/specificpost/${id}`)
  const {title,image,description,price,category} = data
 
  return (
    <div className='container'>
      <h3>{loading}</h3>
      <div className='row'>
        <div>
          <img src={image} alt="" />
        </div>
       <div>
       <h4>Product Name</h4>
        <p>{title}</p>
        <p>{category}</p>
          <p>{description}</p>
          <p>{price}</p>
        <button className='btn shop'>Shop Now</button>
        <button className='btn add'>Add to Cart</button>
       </div>
       <div>
       <div className='d-flex gap-5 pt-5'>
       <div className='d-flex gap-2'>
        <img className='bus' src={bus} alt="" />
        <p className='mt-2'>Nationwide Delivery <br /> Anywhere Anytime</p>
      </div>
      <div className='d-flex gap-2'>
        <img className='bus' src={deliver} alt="" />
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
    </div>
  )
}

export default SingleProduct