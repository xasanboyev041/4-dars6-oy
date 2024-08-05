import React, { useEffect, useState } from "react";
import "./Clothes.css";

const Clothes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <>
      <div className="container">
        <div className="wrapper-clothes">
          <div>
            <h3 className="arrivals">NEW ARRIVALS</h3>
            <div className="wrapper-easy">
              {products.slice(0, 4).map((product) => (
                <div className="easy" key={product.id}>
                  <img src={product.thumbnail} alt="" />
                  <h3>{product.title}</h3>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="arrivals">TOP SELLING</h3>
            <div className="wrapper-easy">
              {products.slice(5, 9).map((product) => (
                <div key={product.id}>
                  <img src={product.thumbnail} alt="" />
                  <h3>{product.title}</h3>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="view-al">View All</button>
      </div>
    </>
  );
};

export default Clothes;
