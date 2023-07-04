import React, {useEffect , useState} from 'react'
import '../style/FemaleSection.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import arrow from '../assets/Arrow 1.png';
import yellowstar from '../assets/yellowstar.png';
import whitestar from '../assets/whitestar.png';
import darkcart from '../assets/darkcart.svg';


const FemaleSection = () => {
  const [data,setData] = useState([]);
  let url = 'https://perfumerysite.onrender.com/perfumery/category/women';
  const getFetchData = async ()=>{
    let fetchUrl = await axios (url);
    console.log(fetchUrl.data);
    setData(fetchUrl.data);
  }
  useEffect(()=>{
    getFetchData()
  },[]);


   return (
    <div className='second-layer pt-4'>
      <div className='container first-layer border rounded '>
       <div className='row'>
       <div className='d-flex justify-content-between align-items-center border border-2 mb-3'>
          <p className='fw-bold'>Female</p>
         <div className='d-flex gap-1'>
         <p>View More</p>
          <img className='arrow' src={arrow} alt="" /> 
         </div>
        </div>
        <div className='share col-lg-12 '>
          {data.map((datum)=>{
            const {_id,title,image,description,category,price} = datum;
            return(
              <div>
                <div key={_id} className='hero-border'>
                  <img className='fetched-img mt-3' src={image} alt="" />
                 <div className='mx-4'>
                 <p className='fw-bold '>{title}</p>
                  <p className='ex'>Exclusive</p>
                  <p className='fw-bold'>#{price}</p>
                 <div className='d-flex gap-3'>
                 <div className='star mb-3'>
                 <img src={yellowstar} alt="" />
                  <img src={yellowstar} alt="" />
                  <img src={yellowstar} alt="" />
                  <img src={yellowstar} alt="" />
                  <img src={whitestar} alt="" />
                 </div>
                  <p className='review'>50 Reviews</p>
                 </div>
                <div className='d-flex gap-5'>
               <div> <button className='btn buy-now'>Buy Now</button></div>
                <Link to='/MyCart'><div className='dark-cart'> <img src={darkcart} alt="" /></div></Link>
                </div>
                 </div>
                </div>
              </div>
            )
          })}
        </div>
       </div>
      </div>
    </div>
  )
}

export default FemaleSection