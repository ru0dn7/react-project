import React from 'react';
import '../../css/sub1/Management.css'
import { AiOutlineCheck } from "react-icons/ai";


function Management(){  //Topics 페이지
    return(
        <div className='sub_page1'>
            <div className='sub1_text'>
                <p><AiOutlineCheck /> 미션   :   <span>사람・세상・미래를 잇는 대한민국 철도</span> </p>
                <p><AiOutlineCheck /> 비전   :  <span> 새로여는 미래교통 함께 하는 한국철도</span></p>
                <p><AiOutlineCheck /> 경영슬로건   :   <span>철도표준을 선도하는 모빌리티 기업, 코레일!</span></p>
            </div>
            <div className='manaImg'></div>
            <div className="management-goals">
                <div className="title"> <AiOutlineCheck /><span>경영목표</span></div>
                <div className="goal-container">
                    <div className="goal-box solid">
                        <p>디지털기반<br /> 안전관리 고도화</p>
                        <p className='line'></p>
                        <ul>
                            <li>・디지털기반</li>
                            <li>・안전관리 고도화</li>
                        </ul>
                    </div>
                    <div className="goal-box outline">
                        <p>자립경영을 위한<br /> 재무건전성 제고</p>
                        <p className='line'></p>
                        <ul>
                            <li>・부채비율</li>
                            <li>・영업손익</li>
                        </ul>
                    </div>
                    <div className="goal-box solid">
                        <p>국민이 체감하는<br /> 모빌리티 혁신</p>
                        <p className='line'></p>
                        <ul>
                            <li>・고객만족도</li>
                            <li>・디지털 서비스 달성률</li>
                        </ul>
                    </div>
                    <div className="goal-box outline">
                        <p>미래지향<br /> 조직문화 구축</p>
                        <p className='line'></p>
                        <ul>
                            <li>・ESG경영지수</li>
                            <li>・조직문화지수</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="management-goals">
                <div className="title"> <AiOutlineCheck /><span>전략과제</span></div>
                <div className="goal-container">
                    <div className="goal-box outline">
                        <ul>
                            <li>디지털통합<br />안전관리</li>
                            <p className='line'></p>
                            <li>중대재해 예방 및 <br /> 안전 문화 확산</li>
                        </ul>
                    </div>
                    <div className="goal-box solid">
                         <ul>
                            <li>운송순익<br />극대화</li>
                            <p className='line'></p>
                            <li>신성장사업<br />경쟁력 확보</li>
                        </ul>
                    </div>
                    <div className="goal-box outline">
                        <ul>
                            <li>디지털<br />서비스 혁신</li>
                            <p className='line'></p>
                            <li>미래융합교통<br />플랫폼 구축</li>
                        </ul>
                    </div>
                    <div className="goal-box solid">
                        <ul>
                            <li>ESG 책임경영<br />내재화</li>
                            <p className='line'></p>
                            <li>스마트근무환경 및<br />상호존중 문화 조성</li>
                        </ul>
                    </div>
                </div>
            </div>
          
        </div>
    )
  };
  
  export default Management;