import React from 'react';
import '../../css/Section1.css'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";


    
function Section1() {

    SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

    return (
        <section className='visual'>
            <h3 className='hidden'> 비주얼영역 </h3>
    
            <div className="visualBox">
                <Swiper
                    
                    slidesPerView={1}
                    navigation={{ clickable: true }}
                    pagination={{ clickable: true }}
                    autoHeight={true}
                    loop={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                        speed={1500}  // 전환 속도 조절
                        effect="fade"  // 페이드 효과 적용
                        fadeEffect={{
                        crossFade: true  // 부드러운 크로스페이드 적용
                    }}
                    className="mySwiper1" >
                    
                    <SwiperSlide className='visual01'>
                        <p>레일을 넘어, <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 내일을 향해</p>
                        <img src={require('../../images/visual/visual09.jpg')} alt='' />
                    </SwiperSlide>
                    <SwiperSlide className='visual02'>
                        <p>마음을 잇다, <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 당신의 코레일</p>
                        <img src={require('../../images/visual/visual07.jpg')} alt='' />
                    </SwiperSlide>
                    <SwiperSlide className='visual03'>
                        <p>당신의 여정, <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 우리의 약속</p>
                        <img src={require('../../images/visual/visual08.jpg')} alt='' />
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </section>
    );
}

export default Section1;