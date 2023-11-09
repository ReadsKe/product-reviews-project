// AddProduct.js
import React, { useState } from 'react';

function AddProduct({ onAddProduct, onUpdateProduct, currentProduct }) {
  const [product, setProduct] = useState(currentProduct || {
    img_url: '',
    brand: '',
    model: '',
    announced: '',
    status: '',
    colors: '',
    reviews: '',
    approx_price_EUR: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentProduct) {
      // Update existing product
      onUpdateProduct(product);
    } else {
      // Add new product
      onAddProduct(product);
    }

    setProduct({
      img_url: '',
      brand: '',
      model: '',
      announced: '',
      status: '',
      colors: '',
      reviews: '',
      approx_price_EUR: '',
    });
  };

  return (
    <div>
      <h2>{currentProduct ? 'Update Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        {/* ... your form fields ... */}
        <button type="submit" className="btn btn-primary">
          {currentProduct ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default AddProduct;

// NewProduct.js
import React, { useState } from 'react';
import AddProduct from '../components/AddProduct';

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState(null);

  const addProductToList = (newProduct) => {
    setNewProduct(newProduct);
  };

  const updateProduct = (updatedProduct) => {
    // Add your PATCH logic here
    // ...

    // Assuming you have an API call to update the product
    console.log('Product updated:', updatedProduct);
    setNewProduct(updatedProduct);
  };

  return (
    <div>
      {newProduct && (
        <div>
          {/* Your existing code for displaying the new product */}
          {/* ... */}
          <button className="btn btn-warning" onClick={() => setNewProduct(null)}>
            Clear Update
          </button>
        </div>
      )}
      <AddProduct
        onAddProduct={addProductToList}
        onUpdateProduct={updateProduct}
        currentProduct={newProduct}
      />
    </div>
  );
};

export default NewProduct;
