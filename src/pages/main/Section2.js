/* eslint-disable */
import React, { useState } from 'react';
import '../../css/Section2.css';
import img1 from '../../images/company/company01.jpg';
import img2 from '../../images/company/company02.jpg';
import img3 from '../../images/company/company03.jpg';
import { RiArrowRightUpLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';


function Section2() {

  const [activeTab, setActiveTab] = useState(0);
  const images = [img1, img2, img3];
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className='company'>
      <h3 className='hidden'>공사소개</h3>
      <div data-aos="fade-up" >
        <p className='text1'>About KORAIL</p>
        <p className='text2'>오늘도 코레일을 이용해 주셔서 고맙습니다.</p>
      </div>
      <div className='box'>
        <div className='box_left' data-aos="fade-right" data-aos-delay="300">
          <img src={images[activeTab]} alt='' />
        </div>
        <div className='box_right' data-aos="fade-left" data-aos-delay="400">
          {['Vision & Mission', 'Organization Chart', 'Location'].map((title, index) => (
            <ul 
              key={index} 
              className={activeTab === index ? 'on' : ''} 
              onClick={() => handleTabClick(index)}>
              <li>
                <dl>
                  <dt>{title}<NavLink to="./Company"><span><RiArrowRightUpLine /></span></NavLink></dt>
                  <dd>{index === 0 ? '경영가치체계' : index === 1 ? '우리들의 이야기' : '찾아오시는 길'}</dd>
                  <dd>{index === 0 ? '새로 여는 미래교통 함께하는 한국철도' : index === 1 ? '내일을 위해 열심히 달리는 철도' : '코레일, 역사와 전통을 따라 이어지는 길'}</dd>
                </dl>
                {/* <p>미션 · 비전 · 경영슬로건 · 핵심가치 · 경영목표</p> */}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section2;
