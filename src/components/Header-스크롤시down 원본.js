import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../images/logo.svg';
import { FaBars } from "react-icons/fa";

function Header() {

  const [upDown, setUpDown] = useState(false); //false(위)/true(아래)

  const [isSwitched, setIsSwitced] = useState(false); //햄버거 메뉴 열림(true)/닫힘(false)

  const handleScroll = () => {
    //console.log(window.scrollY);
    //window.scrollY -> 스크롤 top의 y축의 거리
    if (window.scrollY > 780) {
      setUpDown(true);
    } else {
      setUpDown(false);
    }
  };

  useEffect(() => {
    // window에 scroll 이벤트를 넣는다.
    window.addEventListener('scroll', handleScroll);
    // 페이지를 벗어날 때 이벤트를 제거한다. 한번 실행할 때 계속 실행된다.


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navHandler = (e) => {
    e.preventDefault();
    setIsSwitced(!isSwitched);  //메뉴 토글
  };

  const closeHandler = () => {
    setIsSwitced(false);  //메뉴 토글
  };

  return (

    <>
      <div id="skipNav">
        <a href="#content">본문 바로가기</a>
        <a href="#gnb">글로벌 네비게이션 바로가기</a>
      </div>
      

      <header className={upDown ? 'down' : 'up'}>
        <div className="header_inner">
          <h1><NavLink to="/" ><img src={img1} alt="코레일 로고" /><span className='hidden'>코레일</span></NavLink></h1>
          <nav id="gnb" className={isSwitched ? 'show' : 'hide'} onClick={closeHandler}>
            <h2 className='hidden'>글로벌 네비게이션 영역</h2>
            <ul>
              <li><h3><NavLink to="/Company">공사소개</NavLink></h3></li>
              <li><h3><NavLink to="/Business">주요사업</NavLink></h3></li>
              <li><h3><NavLink to="/Train">열차소개</NavLink></h3></li>
              <li><h3><NavLink to="/Fee">열차운임표</NavLink></h3></li>
              <li><h3><NavLink to="/Place">역위치정보</NavLink></h3></li>
            </ul>
          </nav>
          <button onClick={navHandler}>
            <span className='hidden'>메뉴열기</span>
            <FaBars className="ico" />
          </button>
        </div>
        </header>
    </>
  );
}

export default Header;