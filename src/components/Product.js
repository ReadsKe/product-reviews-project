import React from "react";
import Swal from "sweetalert2";

const Product = ({ product, onDelete }) => {
  const handleDelete = () => {
    fetch(`https://product-reviews-4iuh.onrender.com/phones/${product.id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
    onDelete(product.id);
    Swal.fire({
        position: 'center',
        icon: 'success',
        iconColor:'#ff0000',
        title: 'Product deleted successfully!',
        showConfirmButton: false,
        timer: 1000
    })
  };

  return (
    <div className="col-md-12 mb-4">
      <div className="card">
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
