import React, { useState } from 'react';
import '../../css/Section4.css';
import code01 from '../../images/train/code01.png';
import { RiArrowRightUpLine } from "react-icons/ri";
import {NavLink} from 'react-router-dom';

function Section4() {
    const [activeTicket, setActiveTicket] = useState("ticket02"); // 기본적으로 ticket02 활성화

    const handleClick = (ticket) => {
        setActiveTicket(ticket === activeTicket ? null : ticket); // 같은 걸 클릭하면 닫기, 다른 걸 클릭하면 변경
    };

    return (
        <section className="train">
            <div className='train_inner'>
                <div className='train_wrap'>
                    <div className="top" data-aos="fade-up">
                        <h3 className='hidden'>열차소개</h3>
                        <p className="small_text">Train Introduction</p>
                        <div className="big_text">여행의 즐거움,<br />코레일과 함께 완성하다</div>
                        <p className="explain_text">빠르고 편리한 이동을 위한 열차 정보를 소개합니다. 고속열차부터 광역열차까지, 다양한 열차를 한눈에 확인해 보세요.</p>
                    </div>

                    <div className="ticket"  data-aos="fade-down" data-aos-duration="2000">
              
                        <div 
                            className={`ticket01 ${activeTicket === "ticket01" ? "active" : ""}`} 
                            onClick={() => handleClick("ticket01")} 
                        >
                            <div className="ticket_num">01</div>
                            <p className="ticket_name">고속열차<NavLink to="./Train"><span><RiArrowRightUpLine /></span></NavLink></p>
                            <p className="ticket_en_text">High-Speed Train</p>

                            <div className="ticket_ex">
                                <p><strong>보유량</strong> 46편성</p>
                                <p><strong>좌석수</strong> 955석</p>
                                <p><strong>최고속도</strong> 330km/h</p>
                            </div>
                            <img src={code01} alt="코드01" className="code_img" />
                            <p className="bottom_name">KORAIL</p>
                        </div>

               
                        <div 
                            className={`ticket02 ${activeTicket === "ticket02" ? "active" : ""}`} 
                            onClick={() => handleClick("ticket02")}
                        >
                            <div className="ticket_num">02</div>
                            <p className="ticket_name">일반열차<NavLink to="./Train"><span><RiArrowRightUpLine /></span></NavLink></p>
                            <p className="ticket_en_text">Regular Train</p>

                            <div className="ticket_ex">
                                <p><strong>보유량</strong> 23편성</p>
                                <p><strong>좌석수</strong> 376석</p>
                                <p><strong>최고속도</strong> 150km/h</p>
                            </div>
                            <img src={code01} alt="코드01" className="code_img" />
                            <p className="bottom_name">KORAIL</p>
                        </div>


                        <div 
                            className={`ticket03 ${activeTicket === "ticket03" ? "active" : ""}`} 
                            onClick={() => handleClick("ticket03")}
                        >
                            <div className="ticket_num">03</div>
                            <p className="ticket_name">광역열차<NavLink to="./Train"><span><RiArrowRightUpLine /></span></NavLink></p>
                            <p className="ticket_en_text">Commuter Train</p>

                            <div className="ticket_ex">
                                <p><strong>보유량</strong> 8편성</p>
                                <p><strong>좌석수</strong> 402석</p>
                                <p><strong>최고속도</strong> 180km/h</p>
                            </div>
                            <img src={code01} alt="코드01" className="code_img" />
                            <p className="bottom_name">KORAIL</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section4;
