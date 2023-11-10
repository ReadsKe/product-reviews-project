import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://product-reviews-4iuh.onrender.com/phones/${id}`)
    .then((res) => res.json())
    .then((res) => {
     setProduct(res);
    });
    }, [id]);

  return (
    <div>
      {product ? (
        <div>
      
          <div className=" product card col-md-9">
                <div className="row">
                    <div className="col-md-3">
                        <img src={product.img_url} className="card-img-top" alt={product.product_name} />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                        <h2 className="card-title">Brand: {product.brand}</h2>
                        <h4 className="card-text">Model: {product.model}</h4>
                        <p className="card-text">Announced: {product.announced}</p>
                        <p className="card-text">Production status: {product.status}</p>
                        <p className="card-text">Status: {product.status}</p>
                        <p className="card-text">Display Type: {product.display_type}</p>
                        <p className="card-text">Display Size: {product.display_size}</p>
                        <p className="card-text">Operating System: {product.OS}</p>
                        <p className="card-text">CPU: {product.CPU}</p>
                        <p className="card-text">Memory Card: {product.memory_card}</p>
                        <p className="card-text">Internal Memory: {product.internal_memory}</p>
                        <p className="card-text">RAM: {product.RAM}</p>
                        <p className="card-text">Primary Camera: {product.primary_camera}</p>
                        <p className="card-text">Secondary Camera: {product.secondary_camera}</p>
                        <p className="card-text">Loud Speaker: {product.loud_speaker}</p>
                        <p className="card-text">Audio Jack: {product.audio_jack}</p>
                        <p className="card-text">Radio: {product.radio}</p>
                        <p className="card-text">USB: {product.USB}</p>
                        <p className="card-text">Sensors: {product.sensors}</p>
                        <p className="card-text">Battery: {product.battery}</p>
                        <p className="card-text">Colors: {product.colors}</p>
                        <p className="card-text">Price: ${product.approx_price_EUR}</p>
                        </div>
                    </div>
                </div>
            </div>
          <button onClick={() => window.history.back()}>Back to Product List</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
