import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function AddProduct({ onAddProduct, onUpdateProduct, productToUpdate }) {
  const [product, setProduct] = useState({
    img_url: '',
    brand: '',
    model: '',
    announced: '',
    status: '',
    colors: '',
    user_reviews: '',
    approx_price_EUR: '',
  });

  useEffect(() => {
    if (productToUpdate) {
      setProduct(productToUpdate);
    }
  }, [productToUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: name === 'user_reviews'? value : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (productToUpdate) {
      // If productToUpdate is present, it's an update operation
      onUpdateProduct(product);
    } else {
      // Otherwise, it's an add operation
      fetch('http://localhost:3000/phones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log('New product added:', res);
          onAddProduct(res);
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          iconColor:'#008000',
          title: 'Product Posted successfully!',
          showConfirmButton: false,
          timer: 1000
      })
    }

    // Reset the form after submission
    setProduct({
      img_url: '',
      brand: '',
      model: '',
      announced: '',
      status: '',
      colors: '',
      user_reviews: '',
      approx_price_EUR: '',
    });
  };

  return (
    <div>
      <div>
      <h2>{productToUpdate ? 'Update Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
            <label className="form-label">Brand Details </label>
            <input type="text" className="form-control form-control-sm" name="brand" required value={product.brand} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Image Link </label>
            <input type="text" className="form-control form-control-sm" name="img_url" required value={product.img_url} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Model</label>
            <input type="text" className="form-control form-control-sm" name="model" required value={product.model} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Year Announced </label>
            <input type="text" className="form-control form-control-sm" name="announced" required value={product.announced} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Status </label>
            <input type="text" className="form-control form-control-sm" name="status" required value={product.status} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">approx_price_EUR</label>
            <input type="text" className="form-control form-control-sm" name="approx_price_EUR" required value={product.approx_price_EUR} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">User Review</label>
            <textarea className="form-control" rows="2" name="reviews" value={product.user_reviews} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">{productToUpdate ? 'Update' : 'Submit'} </button>  
        </form>
    </div>
    </div>
  );
}

export default AddProduct;
