// export default ProductList;
import React, { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom"; 
import Product from "./Product";
const ProductList = () => {
  const [products, setProducts] = useState([]);
   // using use state to show 4 products as initial display 
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [selectedProductId, setSelectedProductId] = useState(null);


  useEffect(() => {
    fetch(" http://localhost:3000/phones")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  // Anonymous function to increase the number of visible product 
  const showMoreProducts = () => {
    setVisibleProducts(visibleProducts + 4);
  };

  const openProductDetails = (id) => {
    setSelectedProductId(id);
  };
  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
     setProducts(updatedProducts);
   };


  return (
        <div className="container">
      <div className="row">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="col-md-12 mb-4">
            <div className="card">
              <div className="row no-gutters">
                <div className="col-md-3">
                  <img src={product.img_url} className="card-img" alt={product.product_name} />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h2 className="card-title">Brand: {product.brand}</h2>
                    <h4 className="card-text">Model: {product.model}</h4>
                    <p className="card-text">Announced: {product.announced}</p>
                    <p className="card-text">Production status: {product.status}</p>
                    <p className="card-text">Available colors: {product.colors}</p>
                    <p className="card-text">Approx price: $ {product.approx_price_EUR}</p>
                  </div>
                </div>
                <Product key={product.id} product={product} onDelete={deleteProduct} />
                              </div>
              <Link to={`/products/${product.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <button onClick={showMoreProducts} className="btn btn-primary">
          Load More
        </button>
      )}

      {selectedProductId !== null && (
        <ProductDetails productId={selectedProductId} openProductDetails={openProductDetails} />
      )}
    </div>

  );
};

export default ProductList;
