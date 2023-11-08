import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  // using use state to show 4 products as initial display 
  const [visibleProducts, setVisibleProducts] = useState(4); 

  //CRUD-FETCH 
  useEffect(()=>{
    fetch("http://localhost:3000/reviews")
    .then((res)=>res.json())
    .then((res)=>{
     setProducts(res)
    })
  }, [])
  console.log(products)
  // Anonymous function to increase the number of visible product 
  const showMoreProducts = () => {
    setVisibleProducts(visibleProducts + 4); 
  };

  return (
    <div>
      <h1>Product List</h1>
      {products.slice(0, visibleProducts).map((product) => (
        <div key={product.id} className="product">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
      {visibleProducts < products.length && (
        <button onClick={showMoreProducts}>Read More</button>
      )}    
    </div>
  );
};

export default ProductList;
