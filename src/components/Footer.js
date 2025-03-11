import React, { useState, useEffect } from "react";
import { FaYoutube,  } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import logo from '../images/footer_logo.svg'
import { FaAnglesUp } from "react-icons/fa6";

function Footer() {

    //Topmenu
    const [upDown, setUpDown] = useState(false); //false(위)/true(아래)

    const handleScroll = () => {
        //console.log(window.scrollY);
        // window.scrollY -> 스크롤의 top의 y축의 거리
        if (window.scrollY > 300) {
            setUpDown(true); // down (보인다)
        } else {
            setUpDown(false); // up (안보인다)
        }
    };

    useEffect(() => {
        // window에 scroll 이벤트를 넣는다.
        window.addEventListener("scroll", handleScroll);
        // 페이지를 벗어날 때 이벤트를 제거한다.
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const topHandler = (e) => {
        e.preventDefault();
        window.scroll({ top: 0, behavior: "smooth" }); // 자바스크립트 -> top 위치로 부드럽게 이동
    };



    // family site
    const [isSwitched, setIsSwitced] = useState(false);
    const familyHandler = () => {
        setIsSwitced(!isSwitched);
    };

    const [isSwitched2, setIsSwitced2] = useState(false);
    const familyHandler2 = () => {
        setIsSwitced2(!isSwitched2);
    };
        

    return (
        <footer>
            <a className={"top_move " + (upDown ? "down" : "up")} href="#" onClick={topHandler}>
                <FaAnglesUp className="topMenuIcon"/>
            </a>

            <div className="footerInner">
                <div className="top">
                    <div className="rule">
                      <a href="https://info.korail.com/info/contents.do?key=2812" target="_blank" rel="noopener noreferrer"><span>개인정보처리방침</span></a>
                      <a href="https://info.korail.com/info/contents.do?key=923" target="_blank" rel="noopener noreferrer"><span>이메일무단수집거부</span></a>
                      <a href="https://info.korail.com/info/contents.do?key=924" target="_blank" rel="noopener noreferrer"><span>저작권정책</span></a>
                    </div>
                
                    <div className="familysiteWrap">
                        <div className="familysite">
                                <button type="button" onClick={familyHandler}>
                                계열사 <IoIosArrowUp className="arrow" />
                                </button>
                            
                                <ul className={isSwitched ? "show" : "hide"}>
                                    <li>
                                        <a href="https://www.korailtravel.com/" target="_blank" rel="noopener noreferrer">코레일관광개발(주)</a>
                                    </li>
                                    <li>
                                        <a href="https://www.korailnetworks.com/" target="_blank" rel="noopener noreferrer">코레일네트웍스(주)</a>
                                    </li>
                                    <li>
                                        <a href="https://www.koraillogis.com/" target="_blank" rel="noopener noreferrer">코레일로지스(주)</a>
                                    </li>
                                    <li>
                                        <a href="https://www.korailretail.com/" target="_blank" rel="noopener noreferrer">코레일유통(주)</a>
                                    </li>
                                    <li>
                                        <a href="https://www.korailtech.com/main/mainPage.do" target="_blank" rel="noopener noreferrer">코레일테크(주)</a>
                                    </li>
                                </ul>
                        </div>
                        
                        <div className="familysite">
                            <button type="button" onClick={familyHandler2}>
                                관련사이트 <IoIosArrowUp className="arrow" />
                            </button>
                        
                            <ul className={isSwitched2 ? "show2" : "hide2"}>
                                <li>
                                    <a href="https://info.korail.com/staff/isaLoginView.do" target="_blank" rel="noopener noreferrer">이사회 커뮤니티</a>
                                </li>
                                <li>
                                    <a href="https://logis.korail.go.kr/index.do" target="_blank" rel="noopener noreferrer">물류정보서비스</a>
                                </li>
                                <li>
                                    <a href="https://www.railroadmuseum.co.kr/" target="_blank" rel="noopener noreferrer">철도박물관</a>
                                </li>
                                <li>
                                    <a href="https://hrd.korail.com/common/greeting.do" target="_blank" rel="noopener noreferrer">인재개발원</a>
                                </li>
                                <li>
                                    <a href="https://ebid.korail.com/" target="_blank" rel="noopener noreferrer">전자조달시스템</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="bottomWrap">
                    <div className="logoSnS">
                        <a href='#'><img src={logo} alt='사이트 로고' /></a>
                        <div className='sns'>
                            <a href='https://www.youtube.com/c/%ED%95%9C%EA%B5%AD%EC%B2%A0%EB%8F%84TV' target="_blank" rel="noopener noreferrer"><span><FaYoutube /></span></a>
                            <a href='https://www.facebook.com/KoreaRailroad' target="_blank" rel="noopener noreferrer"><span><FaFacebook /></span></a>
                            <a href='https://www.instagram.com/korail_official_/?hl=ko' target="_blank" rel="noopener noreferrer"><span><FaInstagram /></span></a>
                            <a href='https://blog.naver.com/korailblog' target="_blank" rel="noopener noreferrer"><span><FaBlogger /></span></a>
                            <a href='https://x.com/korail_official' target="_blank" rel="noopener noreferrer"><span><FaSquareXTwitter /></span></a>
                        </div>
                    </div>

                    <div className="info">
                        <span>상호 : 한국철도공사 &nbsp;&nbsp;&nbsp;</span>
                        <span>대표자 : 한문희 &nbsp;&nbsp;&nbsp;</span>
                        <span>사업자등록 : 314-82-10024 &nbsp;&nbsp;&nbsp;</span>
                        <span>통신판매업신고 : 대전 동구-0233호 &nbsp;&nbsp;&nbsp;</span>
                        <span>대전광역시 동구 중앙로 240 &nbsp;&nbsp;&nbsp;</span>
                        <span>고객센터 : 1588-7788(이용료 : 발신자부담) &nbsp;&nbsp;&nbsp;</span>
                        <span>대표전화 : 042-472-5000 &nbsp;&nbsp;&nbsp;</span>
                        <span>팩스 : 02-361-8385 &nbsp;&nbsp;&nbsp;</span>
                        <p>COPYRIGHT ⓒ KOREA RAILROAD. ALL RIGHTS RESERVED. </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;