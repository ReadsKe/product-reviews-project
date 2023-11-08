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
    }, []) //Dependancies

  console.log(products)
  // Anonymous function to increase the number of visible product 
  const showMoreProducts = () => {
    setVisibleProducts(visibleProducts + 4); 
  };

  return (

    <div className="container">
    <h1>Product List</h1>
    <div className="row">
      {products.slice(0, visibleProducts).map((product) => (
        <div key={product.id} className="col-md-12">
          <div className="product card">
            <div className="row">
              <div className="col-md-3">
                <img src={product.product_url} className="card-img-top" alt={product.product_name} />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h2 className="card-title">{product.product_name}</h2>
                  <h3 className="card-text">{product.description}</h3>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Category: {product.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    {visibleProducts < products.length && (
      <button onClick={showMoreProducts} className="btn btn-primary">Read More</button>
    )}
  </div>
  
  );
};

export default ProductList;
