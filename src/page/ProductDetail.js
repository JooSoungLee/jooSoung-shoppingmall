import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ProductDetail.css'; // CSS 파일 import

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    //let url = `http://localhost:5000/products/${id}`;
    let url = `https://my-json-server.typicode.com/JooSoungLee/jooSoung-shoppingmall/products/${id}`;

    
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="product-detail-container">
      <Row className="align-items-center">
        <Col md={6} className="product-img">
          <img src={product?.img} alt={product?.title} className="img-fluid" />
        </Col>
        <Col md={6}>
          <div className="product-info">
            <h2 className="product-title">{product?.title}</h2>
            <p className="product-price">{product?.price} 원</p>
            <p className="product-choice">
              {product?.choice === true ? "Conscious choice" : "Unconscious Choice"}
            </p>
            <Form.Select aria-label="사이즈 선택" className="size-select">
              <option>사이즈 선택</option>
              {product?.size.map((obj, index) => (
                <option key={index}>{obj}</option>
              ))}
            </Form.Select>
            <Button variant="dark" className="add-button">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;