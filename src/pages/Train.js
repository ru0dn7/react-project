import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // react-scroll 추가
import '../css/train01.css';
import back02 from '../images/train/high02.png';
import back03 from '../images/train/high03.png';
import back04 from '../images/train/high04.png';
import back05 from '../images/train/high05.png';
import highTrain from '../images/train/hightrain01.png';
import regularTrain from '../images/train/regulartrain01.png';
import commuterTrain from '../images/train/commutertrain01.png';

function Train() {
    const [isFixed, setIsFixed] = useState(false);
    const [originalOffset, setOriginalOffset] = useState(0);
    const [offsetValue, setOffsetValue] = useState(-80);
    
    useEffect(() => {
        const tabMenu = document.querySelector('.tab_menu');
        const header = document.querySelector('header');
    
        if (!tabMenu || !header) return;
    
        const initialOffset = tabMenu.offsetTop; // 초기 tabMenu 위치 저장
    
        const handleScroll = () => {
            const headerHeight = header.offsetHeight;
            const scrollY = window.scrollY;
    
            if (scrollY === 0) {
                setIsFixed(false);
                setOffsetValue(-80); // 초기값으로 유지
                return;
            }
    
            if (scrollY >= initialOffset - headerHeight) {
                setIsFixed(true);
                setOffsetValue(-160);
            } else {
                setIsFixed(false);
                setOffsetValue(-290);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    return (
 
      

            <section className="trainsub">
                <div className='trainsub_top'></div>

                <div className='trainsub_inner'>
                    <div className='trainsub_wrap'>
                        <div className="title_area">
                            <h2>열차소개</h2>
                            <p>Train Introduction</p>
                        </div>

              
                        <div className={`tab_menu ${isFixed ? 'fixed' : ''}`}>
                            <ul className="subNav">
                                
                                <Link to="high-speed" smooth={true} duration={1000} offset={offsetValue}>
                                    <li>
                                        고속열차
                                    </li>
                                </Link>

                                <Link to="regular" smooth={true} duration={1000} offset={offsetValue}>
                                    <li>
                                    일반열차
                                    </li>
                                </Link>
                                <Link to="commuter" smooth={true} duration={1000} offset={offsetValue}>
                                    <li>
                                    광역열차
                                    </li>
                                </Link>
                            </ul>
                        </div>

                        <div className="sub3_intro">
                                <div className="content">
                                    <p>KORAIL</p>
                                    <p>당신의 여행이 더 특별해지는 순간!<br/>
                                    코레일과 함께</p>
                                    <p>코레일은 빠르고 안전한 철도 서비스로 전국을 연결하며, 고객 한 분 한 분의<br/>
                                        소중한 여정을 함께합니다. KTX의 고속열차부터 지역을 잇는 광역 등 어디든,<br/>
                                        어떤 여행이든, 코레일과 함께라면 더욱 편안하고 즐거워집니다.</p>
                                </div>
                            </div>

                            <div className="sub3_service">
       
                            <div className="service_text">
                               <h3> 코레일, <br/>
                                최적 서비스
                                </h3>
                            </div>
        
                            <div className="service_content">
                                <div className="service_item">
                                <img src={back02} alt="전국을 달리는 코레일 열차" />
                                <div className="text">
                                    <h4>전국을 연결하는 광범위한 네트워크</h4>
                                    <p>전국 주요 도시를 잇는 다양한 노선망</p>
                                    <p>정시 운행과 체계적인 스케줄 운영</p>
                                </div>
                                </div>

                                <div className="service_item">
                                <img src={back03} alt="쾌적한 여정을 위한 좌석" />
                                <div className="text">
                                    <h4>쾌적한 좌석과 안락한 인테리어</h4>
                                    <p>넓고 편안한 좌석 배치</p>
                                    <p>최신 편의 시설이 갖춰진 실내 디자인</p>
                                </div>
                                </div>

                                <div className="service_item">
                                <img src={back04} alt="고속 이동을 위한 열차" />
                                <div className="text">
                                    <h4>첨단 기술의 초고속 운행</h4>
                                    <p>최고속도 330km/h의 빠른 이동</p>
                                    <p>첨단 시스템으로 구현한 안전성</p>
                                </div>
                                </div>

                                <div className="service_item">
                                <img src={back05} alt="전국을 달리는 코레일 열차" />
                                <div className="text">
                                    <h4>안전과 신뢰를 담은 서비스</h4>
                                    <p>철저한 안전 점검 및 관리</p>
                                    <p>고객 중심의 친절한 서비스 제공</p>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="train_info" id="high-speed">
                        <div className="service_text">
                            <h3>
                            고속열차, <br />
                            이동의 혁신
                            </h3>
                            </div>
                        <div className="train_wrapper">
                            <p className="description">
                                최첨단 설계와 기술로 이루어진 주요 제원을 통해 안정적이고 효율적인 운행을 보장합니다.
                            </p>
                            <img src={highTrain} alt="고속열차" />
                            <table className="train_table">
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>내용</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td>동력차 (L × W)</td>
                                        <td>22,607 × 2,814 (mm)</td>
                                        </tr>
                                        <tr>
                                        <td>편성길이</td>
                                        <td>388.1 m</td>
                                        </tr>
                                        <tr>
                                        <td>출력</td>
                                        <td>18,177 Hp</td>
                                        </tr>
                                        <tr>
                                        <td>중량</td>
                                        <td>694.1 ton</td>
                                        </tr>
                                        <tr>
                                        <td>제동거리</td>
                                        <td>3,300 m</td>
                                        </tr>
                                        <tr>
                                        <td>내구연한</td>
                                        <td>30년</td>
                                        </tr>
                                        <tr>
                                        <td>보유량</td>
                                        <td>46편성</td>
                                        </tr>
                                        <tr>
                                        <td>좌석수</td>
                                        <td>955석</td>
                                        </tr>
                                        <tr>
                                        <td>최고속도</td>
                                        <td>330km/h</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="train_info" id="regular">
                        <div className="service_text">
                            <h3>
                            일반열차, <br />
                            편안을 싣고
                            </h3>
                            </div>
                        <div className="train_wrapper">
                            <p className="description">
                                일반열차는 합리적인 요금과 안정적인 운행으로 일상의 이동부터 특별한 여행까지 함께합니다.
                            </p>
                            <img src={regularTrain} alt="일반열차" />
                            <table className="train_table">
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>내용</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                            <td>동력차 (L × W)</td>
                                            <td>23,905 x 3,150(mm)</td>
                                            </tr>
                                            <tr>
                                            <td>편성길이</td>
                                            <td>143m</td>
                                            </tr>
                                            <tr>
                                            <td>출력</td>
                                            <td>4,021Hp</td>
                                            </tr>
                                            <tr>
                                            <td>중량</td>
                                            <td>267ton</td>
                                            </tr>
                                            <tr>
                                            <td>제동거리</td>
                                            <td>900m</td>
                                            </tr>
                                            <tr>
                                            <td>내구연한</td>
                                            <td>25년</td>
                                            </tr>
                                            <tr>
                                            <td>보유량</td>
                                            <td>23편성</td>
                                            </tr>
                                            <tr>
                                            <td>좌석수</td>
                                            <td>376석</td>
                                            </tr>
                                            <tr>
                                            <td>최고속도</td>
                                            <td>150km/h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="train_info" id="commuter">
                        <div className="service_text">
                            <h3>
                            광역열차, <br />
                            일상의 연결
                            </h3>
                            </div>
                        <div className="train_wrapper">
                            <p className="description">
                                광역열차는 편리한 운행 간격과 넓은 네트워크로 안전하고 쾌적하게 이용할 수 있도록 설계되었습니다.
                            </p>
                            <img src={commuterTrain} alt="광역열차" />
                            <table className="train_table">
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>내용</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                            <td>동력차 (L × W)</td>
                                            <td>19,500 x 3,120(mm)</td>
                                            </tr>
                                            <tr>
                                            <td>편성길이</td>
                                            <td>162m</td>
                                            </tr>
                                            <tr>
                                            <td>출력</td>
                                            <td>5,364Hp</td>
                                            </tr>
                                            <tr>
                                            <td>중량</td>
                                            <td>360ton</td>
                                            </tr>
                                            <tr>
                                            <td>제동거리</td>
                                            <td>1,200m</td>
                                            </tr>
                                            <tr>
                                            <td>내구연한</td>
                                            <td>25년</td>
                                            </tr>
                                            <tr>
                                            <td>보유량</td>
                                            <td>8편성</td>
                                            </tr>
                                            <tr>
                                            <td>좌석수</td>
                                            <td>402석</td>
                                            </tr>
                                            <tr>
                                            <td>최고속도</td>
                                            <td>180km/h</td>
                                            </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
  
    );
}

export default Train;
