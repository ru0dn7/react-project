import React from 'react';
import '../../css/Section7.css';
// import Section7 from '../../js/Section7';
import { RiCustomerService2Fill } from "react-icons/ri";

function Section7() {
    return (
        <section className='voc'>
            <h3 className='hidden'>고객의소리</h3>
            <dl>
                <dd data-aos="fade-up">Voice of Customer (VOC)</dd>
                <dt data-aos="fade-up">고객의 의견을 소중히 듣고, 고객과의 약속에 책임을 다하며 <br />
                    고객의 편의를 먼저 생각하는 <span>코레일</span>입니다.
                </dt>
                <dd data-aos="fade-up">고객의 소리를 귀담아 듣고 서비스 개선으로 응답하겠습니다.</dd>
            </dl>
            <div className='box1' data-aos="fade-right">
                <a href='https://info.korail.com/mbs/www/jsp/voc/fe/login/NR_loginForm.do' className='more' target='_blank'>고객의 소리 신청하기</a>
                <RiCustomerService2Fill className="icon"></RiCustomerService2Fill>
            </div>
        
        </section>
    );
}

export default Section7;