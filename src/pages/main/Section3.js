import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import { RiArrowRightUpLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import "../../css/Section3.css";

function Section3() {
  SwiperCore.use([Navigation, Pagination]);
  

  return (
    <section className="Businesses">
      <h3 className="hidden">사업소개</h3>
      <p data-aos="fade-up">Core Businesses</p>
      <div className="Businesses_txt" data-aos="fade-up">
        <span>전국을 잇는 철도</span>
        {/* <p>코레일은 철도 운송을 중심으로 다양한 사업을 통해 대한민국의 교통 혁신을 선도하고 있습니다. </p> */}
      </div>
      <div className="sec3-swiper-wrap" >
        <Swiper
          breakpoints={{
            // 1024: {
            //   slidesPerView: 2,
            // },
            769: {
              slidesPerView: 1,
              spaceBetween: 30,
            },

            640: {
              slidesPerView: 1,
              spaceBetween: 400,
            },
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={"auto"}
          spaceBetween={30}
          loop={true}
          loopedSlides={2}
          navigation={{ clickable: true }}>
          <SwiperSlide>
            <div className="slide-item">
              <div className="text">
               <div className="sec3Icon">
                 여객수송<NavLink to="./Business"><RiArrowRightUpLine /></NavLink>
               </div>
                <span>
                  한국철도공사 여객사업본부는, 전국을 반나절 생활권으로 <br />
                  이어주는 고속열차와 지역과 지역을 연결하는 일반열차를
                  <br />
                  통해 안전하고 편리한 여객 서비스를 제공합니다.
                </span>
              </div>
              <img src={require("../../images/business/train1.jpg")} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-item">
              <div className="text">
               <div className="sec3Icon">
                 광역수송<NavLink to="./Business"><RiArrowRightUpLine /></NavLink>
               </div>
                <span>
                  한국철도공사 광역사업본부는, 광역·도시철도 사업의 국내 최대 <br />
                  운영자로서 총 15개의 광역철도 노선[경부·경인·경원·장항(1호선), <br />
                  경의·중앙, 안산·과천, 분당·수인, 경춘, 일산, 경강, 동해, 서해선]을 <br /> 운영하고 있습니다.
                </span>
              </div>
              <img src={require("../../images/business/train2.jpg")} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-item">
              <div className="text">
                <div className="sec3Icon">
                  물류수송<NavLink to="./Business"><RiArrowRightUpLine /></NavLink>
                </div>
                <span>
                  한국철도공사 물류사업본부는, 수출입 물량인 컨테이너와
                  <br /> 국가기간산업에 필요한 시멘트·철강·석탄 등의 운송을 주로 <br />
                  담당하고 있으며, 기존 운송사업에서 벗어나 하역·창고· <br />
                  포워딩 등 사업영역 확장을 통해 글로벌 종합물류기업으로의 도약을 <br />
                  진행하고 있습니다.
                </span>
              </div>
              <img src={require("../../images/business/train3.jpg")} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Section3;
