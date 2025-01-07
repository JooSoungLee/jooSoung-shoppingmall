import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'; // CSS 파일 import

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="product-card" onClick={showDetail}>
      <img
        src={item?.img}
        alt={item?.title}
        className="product-image"
      />
      <div className="product-choice">
        {item?.choice ? "Conscious choice" : "Unconscious Choices"}
      </div>
      <div className="product-title">{item?.title}</div>
      <div className="product-price">{item?.price}</div>
      <div className={`product-label ${item?.new ? 'new' : 'popular'}`}>
        {item?.new ? "신제품" : "인기제품"}
      </div>
    </div>
  );
};

export default ProductCard;