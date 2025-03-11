import React from 'react';
import '../../css/Section5.css';
// import train from "../../images/vr/Train.png";
import { RiArrowRightUpLine } from "react-icons/ri";

function Section5() {
    return (
        <section className='vr'>
            <h3 className='hidden'>VR 투어</h3>   
              <div className='inner' data-aos="fade-up">
                  <p className='text1'>VR Tour</p>
                  <p className='text2'>VR로 체험하는<br/>
                                생생한 기차 내부 시설</p>
              </div>
            <div className='VrTour'>
                <div></div>
                        <ul>
                            <li data-aos="fade-left">
                                <a href='https://info.korail.com/info/contents.do?key=1512' target='_blank'>KTX 실내 VR<span><RiArrowRightUpLine /></span></a>
                                    <div className="map_point">
                                        <span></span>
                                        <span></span>
                                        <em></em>
                                    </div>
                            </li>

                            <li data-aos="fade-left" data-aos-delay="200">
                                <a href='https://info.korail.com/site/info/vr/vtour_2/vtour/tour.html' target='_blank'>KTX-이음<span><RiArrowRightUpLine /></span></a>                                  
                                     <div className="map_point">
                                        <span></span>
                                        <span></span>
                                        <em></em>
                                    </div>
                            </li>

                            <li data-aos="fade-left" data-aos-delay="400">
                                <a href='https://info.korail.com/site/info/vr/vtour_3/vtour/tour.html' target='_blank'>KTX-산천 VR<span><RiArrowRightUpLine /></span></a>
                                    <div className="map_point">
                                        <span></span>
                                        <span></span>
                                        <em></em>
                                    </div>
                            </li>

                        </ul>  
            </div>
        </section>
    );
  }

  export default Section5;

  