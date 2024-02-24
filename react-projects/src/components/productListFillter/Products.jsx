import React, { useEffect, useState } from "react";
import "./styles.css";
const Products = () => {
  const [data, setData] = useState([]);

  const fetchProductsData = async () => {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  console.log(data);

  return (
    <>
      <div className="card">
        {data?.products?.map((product) => (
          <div className="product" key={product.id}>
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-details">
              <p className="product-title">{product.title}</p>
              <p className="product-price">{product.price}</p>
            </div>
            <button>Add</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
