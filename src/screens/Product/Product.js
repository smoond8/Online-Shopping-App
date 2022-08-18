// import React, { useEffect, useState } from "react";
// import axios from "axios";
// function Product() {
//   useEffect(() => {
//     const fetchProducts = async () => {
//       var config = {
//         method: "get",
//         url: "https://fakestoreapi.com/products",
//       };
//       axios(config)
//         .then((res) => {
//           let response = res.data;
//           console.log({ response });
//         })
//         .catch((e) => console.log(e));
//     };
//     fetchProducts()
//   }, []);
//   return <div></div>;
// }

import React from "react";
import { useState, useEffect } from "react";
import "./Product.css";
const url = "https://fakestoreapi.com/products";
const Product = () => {
  const [user, setUser] = useState([]);
  const FetchApi = async () => {
    const response = await fetch(url);
    
    setUser(await response.json());
  };

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <>
      <div className="outer">
        <div className="main">
          <div className="container">
            <div className="inner-item">
              
              {user.map((current) => {
                return <div className="in-item">
                  
              <img src={current.image}></img>
              <p className="title">
                <span>title:-</span>{current.title}
              </p>
              <p className="price">
                <span>Price:-</span>{current.price}
              </p>
              <p className="rate">
                <span>rating:-</span>{current.rating.rate}
              </p>
              <div className="desc">
                <p>
               {current.description}
                </p>
              </div>
              
                </div>;
                
              })}


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
