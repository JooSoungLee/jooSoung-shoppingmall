import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';
import './ProductAll.css'; // CSS 파일 import

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    console.log("searchQuery", searchQuery);
    
    //let url = `http://localhost:5000/products?q=${searchQuery}`;
    let url = `https://my-json-server.typicode.com/JooSoungLee/jooSoung-shoppingmall/products?q=${searchQuery}`;

    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log("data", data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container className="product-container">
      <Row>
        {productList.length > 0 ? (
          productList.map((menu) => (
            <Col lg={3} md={4} sm={6} key={menu.id} className="mb-4">
              <ProductCard item={menu} />
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <h4>상품이 없습니다.</h4>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ProductAll;