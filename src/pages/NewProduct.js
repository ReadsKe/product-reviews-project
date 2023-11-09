import React, { useState } from 'react';
import AddProduct from '../components/AddProduct';

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState(null);
  const [productToUpdate, setProductToUpdate] = useState(null);

  const addProductToList = (newProduct) => {
    setNewProduct(newProduct);
  };
  const updateProduct = (updatedProduct) => {
    // PATCH
    fetch(`http://localhost:3000/phones/${updatedProduct.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('Product updated:', res);
        setNewProduct(res);
        setProductToUpdate(null); 
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
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
        <button onClick={() => setProductToUpdate(newProduct)} className="btn btn-warning"> Update Listing </button>
    </div>
      )}
      <AddProduct onAddProduct={addProductToList} onUpdateProduct={updateProduct} productToUpdate={productToUpdate} />
  </div>
  );
};

export default NewProduct;
