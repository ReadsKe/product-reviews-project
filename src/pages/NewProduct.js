import React, { useState } from 'react';
import AddProduct from '../components/AddProduct';

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState(null);

  const addProductToList = (newProduct) => {
    setNewProduct(newProduct);
  };

  return (
    <div>
      {newProduct && (
    <div>
       <div className="card">
          <div className="row no-gutters">
             <div className="col-md-3">
             <img src={newProduct.img_url} className="card-img" alt={newProduct.brand} />
             </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h2 className="card-title">Brand: {newProduct.brand}</h2>
                    <h4 className="card-text">Model: {newProduct.model}</h4>
                    <p className="card-text">Announced: {newProduct.announced}</p>
                    <p className="card-text">Production status: {newProduct.status}</p>
                    <p className="card-text">Available colors: {newProduct.colors}</p>
                    <p className="card-text">Approx price: $ {newProduct.approx_price_EUR}</p>
                    <p className="card-text"> user_reviews: {newProduct.user_reviews}</p>

                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card-body">
                    <h4 className="card-title">Reviews</h4>
                    <p className="card-text"> user_reviews: {newProduct.user_reviews}</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
      )}
      <AddProduct onAddProduct={addProductToList} />
  </div>
  );
};

export default NewProduct;
