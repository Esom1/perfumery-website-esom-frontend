import React,{useContext} from 'react';
import CartContext from '../hooks/CartContext';
import '../style/SingleProduct.css'
import UseFetch from '../hooks/UseFetch';
import {useParams, Link } from 'react-router-dom'
import axios from 'axios';
import bus from '../assets/bus.png'
import deliver from '../assets/delivery.png'
import pay from '../assets/pay.png'
import tag from '../assets/tag.png'


const SingleProduct = () => {
  const {handleAddToCart} = useContext(CartContext)  
  const {id} = useParams()
  const { data,loading } = UseFetch(`https://perfumerysite.onrender.com/perfumery/specificpost/${id}`)
  const {title,image,description,price,category} = data
 
  return (
    <div className='container'>
      <h3>{loading}</h3>
      <div className='row mt-5 gap-2'>
        <div className='try'>
        <div className='border border-2 rounded shadow-5 '>
          <img className='image-fluid w-100 p-3' src={image} alt="" />
        </div>
        <div className='border border-2 shadow-5 rounded '>
       <div className='p-3'>
       <h4>Product Name</h4>
        <h5 className='del'>{title}</h5>
        <h4>Description</h4>
          <p>{description}</p>
          <h4 className='span'>#{price}</h4>
       <div className='d-flex gap-3'>
       <button onClick={()=>{handleAddToCart(datum)}}  className='btn shop'>Shop Now</button>
        <button onClick={()=>{handleAddToCart(datum)}}  className='btn add'>Add to Cart</button>
       </div>
       </div>
       </div>
       <div className='straighten border border-2 shadow-5 rounded '>
       <div className=' p-3'>
       <div className='d-flex gap-2'>
        <img className='bus2' src={bus} alt="" />
        <p className='mt-2'>Nationwide Delivery <br /> Anywhere Anytime</p>
      </div>
      <div className='d-flex gap-2'>
        <img className='bus2' src={deliver} alt="" />
        <p className='mt-2'>Same Day Delivery <br />In Lagos Only</p>
      </div>
      <div className='d-flex gap-2'>
        <img className='bus2' src={pay} alt="" />
        <p className='mt-2'>Pay On Delivery <br />In Lagos Only</p>
      </div>
      <div className='d-flex gap-2'>
        <img className='bus2' src={tag} alt="" />
        <p className='mt-2'>Lowest Price <br />Best Deal</p>
        </div>
       </div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default SingleProduct