import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import hnmLogo from '../images/hnmLogo.jpg';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // CSS 파일을 별도로 분리


const Navbar = ({ authenticate, setAuthenticate }) => {
    const [loginLogoutText, setLoginLogoutText] = useState("로그인");
    const navigate = useNavigate();

    useEffect(() => {
        setLoginLogoutText(authenticate ? "로그아웃" : "로그인");
    }, [authenticate]);

    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "Sale"];

    const goToLogin = () => {
        //setAuthenticate(!authenticate);
        //navigate("/login");

        // 로그인 버튼 클릭시
        if(loginLogoutText === "로그인"){
            setAuthenticate(false);
            navigate("/login");
        }else{
            setAuthenticate(false);
            setLoginLogoutText("로그인");
            navigate("/login");
        }

    };

    const search = (event) => {
        if (event.key === "Enter") {
            const keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    };

    const goToMain = () => {
        navigate("/");
    };

    return (
        <div className="navbar">
            <div className="menu-area">
                {/* <img src={hnmLogo} alt="H&M Logo" className="logo" onClick={goToMain} /> */}
                <div className="header-logo">
                    <span className="logo" onClick={goToMain}>주성이네<br></br>옷가게</span>
                </div>
                
                <ul className="menu-list">
                    {menuList.map((menu, index) => (
                         <li key={index}>{menu}</li>
                    ))}
                </ul>
                <div className="search-area">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyPress={search} placeholder="검색..." />
                </div>
            </div>
            <div className="login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <span>{loginLogoutText}</span>
            </div>
        </div>
    );
};

export default Navbar;