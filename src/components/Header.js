import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import img1 from '../images/logo.svg';
import { FaBars } from "react-icons/fa";

function Header() {
  const [upDown, setUpDown] = useState(false); // false(위)/true(아래)
  const [isSwitched, setIsSwitched] = useState(false); // 햄버거 메뉴 열림(true)/닫힘(false)
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      let threshold = 780; // 기본값 (index.html의 .visualBox 높이)
      
      // 현재 페이지가 index가 아니라면 첫 번째 section의 div 높이로 설정
      if (location.pathname !== '/') {
        const firstDiv = document.querySelector('section div:first-of-type');
        if (firstDiv) {
          threshold = firstDiv.offsetHeight;
        }
      }
      
      setUpDown(window.scrollY > threshold - 160);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 컴포넌트 마운트 시 실행
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const navHandler = (e) => {
    e.preventDefault();
    setIsSwitched(!isSwitched);
  };

  const closeHandler = () => {
    setIsSwitched(false);
  };

  return (
    <header className={upDown ? 'down' : 'up'}>
      <div className="header_inner">
        <h1><NavLink to="/" ><img src={img1} alt="코레일 로고" /><span className='hidden'>코레일 로고</span></NavLink></h1>
        <nav className={isSwitched ? 'show' : 'hide'} onClick={closeHandler}>
          <h2 className='hidden'>글로벌네비게이션</h2>
          <ul>
            <li><NavLink to="/Company">공사소개</NavLink></li>
            <li><NavLink to="/Business">주요사업</NavLink></li>
            <li><NavLink to="/Train">열차소개</NavLink></li>
            <li><NavLink to="/Fee">열차운임표</NavLink></li>
            <li><NavLink to="/Place">역위치정보</NavLink></li>
          </ul>
        </nav>
        <button onClick={navHandler}>
          <span className='hidden'>메뉴열기</span>
          <FaBars className="ico" />
        </button>
      </div>
    </header>
  );
}

export default Header;
