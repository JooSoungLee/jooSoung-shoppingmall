import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

/**
 * 기능정리
 * 
 * 1. 전체상품페이지, 로그인, 상품상세 페이지가 구현 대상 페이지이다.
 * 1-1. 네이게이션 바를 만든다.
 * 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
 * 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
 * 4. 상품디테일을 눌렀으나 로그인이 되어있지 않을 경우에는 로그인 페이지가 먼저 나온다.
 * 5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
 * 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
 * 7. 로그아웃이 되면 상품 디테일페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
 * 8. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
 * 9. 상품을 검색 할 수 있다.
 * */ 
function App() {
  const [authenticate, setAuthenticate] = useState(false); // true면 로그인 false면 로그인 안됨
  useEffect(()=>{
    console.log("authenticate : ",  authenticate);
  }, [authenticate]);
  return (
    <div className="app-container">
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<ProductAll/>}></Route>
          <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}></Route>
          <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
