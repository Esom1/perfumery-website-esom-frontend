import React, { useContext } from "react";
import CartContext from "../hooks/CartContext";
import "../style/MyCart.css";
import { Link } from "react-router-dom";
import emptycart from "../assets/emptycart.jpeg";
import van from "../assets/van.png";
import gift from "../assets/ph_gift.png";
import vector from "../assets/Vector.svg";

const MyCart = () => {
  const {
    cartItem,
    setCartItem,
    handleIncrease,
    handleDecrease,
    totalPrice,
    handleRemove,
  } = useContext(CartContext);

  return (
    <div>
      <div className="container">
        <div className="cart-landing mt-5 mb-5">
          <h2 className="my-cart">My Cart</h2>
          <p className="welcome-back">Welcome Back!</p>
        </div>
        <div className="row">
          <div className="col-lg-9">
        <div className="d-flex justify-content-between welcome-back top-holder cart-holder text-dark">
                  <p>Product</p>
                  <p>Quantity</p>
                  <p>Total</p>
                </div>
        <div>
          {cartItem.length === 0 && (
            <div>
              <img src={emptycart} alt="" />
              <h3>THIS CART IS EMPTY</h3>
            </div>
          )}
        </div>
        {cartItem.map((singleCartItem) => {
          const { _id, image, title, price, quantity } = singleCartItem;
          return (
            <div key={_id} className="guide ">
              <div className="cart-holder">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="cart-page d-flex gap-4 mt-3">
                    <img src={image} alt="" />
                    <p className="cart-title ">{title}</p>
                  </div>
                  <div className="cart-relative">
                    <div className="handle d-flex justify-content-between align-items-center ">
                      <p
                        onClick={() => handleIncrease(singleCartItem)}
                        className="cart-btn"
                      >
                        +
                      </p>
                      <p className="quantity">{quantity}</p>
                      <p
                        onClick={() => handleDecrease(singleCartItem)}
                        className="cart-btn"
                      >
                        -
                      </p>
                    </div>
                    <div className="abs">
                      {cartItem.length >= 1 && (
                        <div className="remove">
                          <p
                            onClick={() => handleRemove(singleCartItem)}
                            className="cart-btn"
                          >
                            {" "}
                            Remove{" "}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="welcome-back cart-price">#{price}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-between cart-holder mt-4 p-3">
          <div className="d-flex gap-5">
            <img src={gift} alt="" />
            <p className="">Do you want a gift wrap? Only #1,000</p>
          </div>
          <button className="btn gift-btn">Add a gift wrap</button>
        </div>
        <div className="d-flex justify-content-between cart-holder mt-3 mb-5 p-3">
          <div className="d-flex gap-5">
            <img src={van} alt="" />
            <p className="">Estimate Shipping</p>
          </div>
         <img src={vector} alt="" />
        </div>
        </div>
       <div className="col-lg-3">
       <div className="total">
         <div className="d-flex justify-content-between total-down ">
         <p className="total-base">Total</p>
          <p className="total-base">#{totalPrice}</p>
         </div>
         <div className="d-flex justify-content-between total-down">
         <p className="total-base">Order Instructions</p>
          <img className="vector" src={vector} alt="" />
         </div>
          <p className="vat">VAT and <span>shipping</span> calculated at checkout</p>
          <button className="btn check-out">check out</button>
        </div>
       </div>
        </div>

        <div>
          <h5>Our guarantees</h5>
          <div className="d-flex justify-content-between p-4 mb-2 cart-holder-end">
            <div className="">
              <p>Premium Quality</p>
              <p className="lorem w-75">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="">
              <p>Excellent Customer Support</p>
              <p className="lorem w-75">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="">
              <p>Excellent Customer Support</p>
              <p className="lorem w-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
