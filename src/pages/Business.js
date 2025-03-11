import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "../css/sub2.css";
import React, { useState, useEffect } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Business() {
  const [value, setValue] = React.useState(0);

  // json 땡겨오기 //
  // 여객
  const [passenger, setPassenger] = useState([]);
  useEffect(() => {
    fetch("/Business_passenger.json", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setPassenger(data);
      })
      .catch((error) => {
        console.error("JSON 데이터를 불러오는 도중 에러 발생:", error);
      });
  }, []);

  // 광역
  const [wide, setWide] = useState([]);
  useEffect(() => {
    fetch("/Business_wide.json", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setWide(data);
      })
      .catch((error) => {
        console.error("JSON 데이터를 불러오는 도중 에러 발생:", error);
      });
  }, []);

  // 물류
  const [coupang, setCoupang] = useState([]);
  useEffect(() => {
    fetch("/Business_coupang.json", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setCoupang(data);
      })
      .catch((error) => {
        console.error("JSON 데이터를 불러오는 도중 에러 발생:", error);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="sub2">
      <div className="visual">
        <img src={require("../images/business/business06.jpg")} alt="" />
      </div>
      <h2 className="hidden">주요사업</h2>
      <div className="title">
        <h2>주요사업</h2>
        <p>Main Business</p>
      </div>
      <Box sx={{ margin: "0 auto", textAlign: "center" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab sx={{ width: "40%", fontSize: "1.2rem", fontWeight: "500" }} label="여객사업" {...a11yProps(0)} />
            <Tab sx={{ width: "40%", fontSize: "1.2rem", fontWeight: "500" }} label="광역사업" {...a11yProps(1)} />
            <Tab sx={{ width: "40%", fontSize: "1.2rem", fontWeight: "500" }} label="물류수송" {...a11yProps(2)} />
          </Tabs>
        </Box>

        {/* 여객사업 */}
        <CustomTabPanel value={value} index={0}>
          <div className="business_top">
            <div className="business_intro_txt">
              <span>
                지역과 지역을 연결하는 일반열차를 통해 <br />
                안전하고 편리한 여객 서비스를 제공합니다.
              </span>
              <p>
                <em>
                  2004년 4월 1일, 세계에서 다섯 번째로 개통한 고속열차는 ‘속도혁명, 경제혁명’을 예고하며 대한민국을 2시간대 생활권으로 만들었습니다.
                  지난
                </em>
                <em>
                  20년간 시속 300km 이상의 속도로 쉼 없이 달려온 KTX는 1일 평균 이용객 23만 명의 대한민국 대표 교통수단입니다. 전국 100여개 간선 및
                </em>
                <em>
                  지선에서 운행하고 있는 일반열차는 지역과 지역을 촘촘하게 연결하고 지역 주민의 이동권을 보장하는 등 철도 공공성 확보에 기여하고
                  있습니다.
                </em>
                <em>여객사업본부는 고객 가치를 창출하고 미래 교통을 선도하여 ‘사람·세상·미래를 잇는 대한민국 철도’를 만들겠습니다.</em>
              </p>
            </div>
          </div>

          <div className="business_mid">
            <h3>간선여객 영업전략 및 수송계획 수립</h3>
            <p>
              코레일은 전국 주요 간선 철도망을 운영하며, 여객 수송을 효율적으로 관리하기 위해 체계적인 영업 전략과 수송 계획을 수립합니다. 이를 통해
              철도 이용객의 편의를 극대화하고, 철도망의 운영 효율성을 높이며, 수익성을 강화하는 것을 목표로 합니다.
            </p>
            <div className="business_midcon ">
              <img src={require("../images/business/image 47.png")} alt="" />
              <p>
                <strong>영업전략 수립</strong>

                <ul>
                  <li>
                    <em>시장 분석 및 수요 예측</em>
                    <span>
                      철도 이용객의 이동 패턴과 수요를 분석하여 최적의 운영 전략을 수립합니다. 계절별, 지역별, 시간대별 수요 변화에 맞춰 서비스 공급을
                      조정합니다. <br />
                    </span>
                  </li>
                  <li>
                    <em>요금 및 서비스 정책</em>
                    <span>
                      경쟁 교통수단(항공, 고속버스 등)과 비교하여 적정 운임을 책정하고, 다양한 할인 정책(조기 예매 할인, 정기권 등)을 도입하여
                      이용객을 유치합니다. <br />
                    </span>
                  </li>
                  <li>
                    <em>신규 노선 및 서비스 개선</em>
                    <span>
                      기존 노선의 효율성을 분석하고, 신설 노선 또는 직결 운행(환승 없이 목적지까지 이동) 등을 검토하여 편리한 이동을 지원합니다.
                    </span>
                  </li>
                </ul>
              </p>
            </div>

            <div className="business_midcon flex_row">
              <img src={require("../images/business/business_mid03.png")} alt="" />
              <p>
                <strong>수송계획 수립</strong>

                <ul>
                  <li>
                    <em>열차 편성 및 운행 일정 조정</em>
                    <span>
                      수요가 많은 시간대에는 열차 운행 횟수를 늘리고, 비교적 이용객이 적은 시간대에는 효율적인 열차 운행을 계획하여 운영비 절감을
                      도모합니다. <br />
                    </span>
                  </li>
                  <li>
                    <em>차량 배치 및 운영 최적화</em>
                    <span>
                      KTX, ITX, 무궁화호 등 다양한 열차의 배차 계획을 수립하여 각 노선에 적절한 차량을 투입합니다. <br />
                    </span>
                  </li>
                  <li>
                    <em>수송능력 확대 및 안전 운영</em>
                    <span>이용객 증가에 대비한 차량 증편, 시설 확충, 정비 강화 등을 추진하여 철도 서비스의 안정성을 확보합니다.</span>
                  </li>
                </ul>
              </p>
            </div>

            <div className="business_midcon">
              <img src={require("../images/business/business_mid04.jpg")} alt="" />
              <p>
                <strong>디지털 전환 및 고객 맞춤형 서비스</strong>

                <ul>
                  <li>
                    <em>빅데이터 활용</em>
                    <span>
                      철도 이용객의 이동 패턴과 선호도를 분석하여 최적의 열차 운행 계획을 수립하고, 맞춤형 서비스를 제공합니다. <br />
                    </span>
                  </li>
                  <li>
                    <em>모바일·온라인 예약 시스템 강화</em>
                    <span>
                      승객들이 더욱 편리하게 예약하고, 실시간으로 열차 정보를 확인할 수 있도록 IT 시스템을 지속적으로 개선합니다. <br />
                    </span>
                  </li>
                  <li>
                    <em>탄소중립 및 친환경 경영</em>
                    <span>
                      철도 운행의 친환경성을 강조하며, 전기·수소 열차 도입, 에너지 절감 기술 적용 등을 통해 지속 가능한 교통수단으로 발전해 나갑니다.
                    </span>
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="business_bot">
            {" "}
            <h3>간선여객 연도별 개통현황</h3>
            <table className="offer table">
              <thead>
                <tr>
                  <th>개통일</th>
                  <th>운행구간</th>
                  <th>개통일</th>
                  <th>운행구간</th>
                </tr>
              </thead>
              <tbody>
                {passenger.map((item, index) => (
                  <tr key={index}>
                    <td>{item.open}</td>
                    <td>{item.local}</td>
                    <td>{item.open2}</td>
                    <td>{item.local2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CustomTabPanel>

        {/* 광역사업 */}
        <CustomTabPanel value={value} index={1}>
          <div className="business_top top2">
            <div className="business_intro_txt">
              <span>광역철도 사업의 국내 최대 운영자로서 총 15개의 광역철도 노선을 운영하고 있습니다.</span>
              <p>
                <em>
                  1974년 최초 개통 당시에는 29개역, 영업거리 74.km였으나, 2024년 기준 295개역, 영업거리 741.4km로 역수와 영업거리 모두 10배 이상
                </em>
                <em>
                  증가하였고 일 평균 이용고객은 약 300만명으로, 수도권 시민의 대표적인 교통수단으로 인정받고 있습니다. 광역철도본부에서는 국내 최초
                </em>
                <em>
                  2층형 도시간 급행열차인 ITX-청춘을 운영하고 있으며, 동해선에 이어, 대구권ㆍ충청권 광역철도 등 지방권 신규 광역철도 노선 확충에도
                </em>
                <em>노력을 기울이는 등 대국민 교통편의 증진 및 신뢰를 받는 광역철도로 거듭나기 위해 노력하고 있습니다.</em>
              </p>
            </div>
          </div>

          <div className="business_mid">
            <h3>광역철도 영업 및 운임제도 수립 </h3>
            <p>
              광역철도는 수도권 및 대도시권에서 도심과 외곽 지역을 연결하는 핵심 교통수단으로, 대중교통 네트워크의 중심적인 역할을 합니다. 원활한
              운영과 지속 가능한 경영을 위해 체계적인 영업 전략과 합리적인 운임제도를 수립하는 것이 필수적입니다.
            </p>
            <div className="business_midcon ">
              <img src={require("../images/business/business_mid05.jpg")} alt="" />
              <p>
                <strong>광역철도 영업 전략 수립</strong>

                <ul>
                  <li>
                    <em>이용객 유치 및 서비스 개선</em>
                    <span>
                      출퇴근 시간대 및 주말, 공휴일 등의 승객 흐름을 분석하여 최적의 운행 스케줄을 운영하고 모바일·온라인 예약 및 환승 서비스 강화를
                      통해 승객의 이용 편의를 높입니다.
                    </span>
                  </li>
                  <li>
                    <em>철도 네트워크와의 연계성 강화</em>
                    <span>
                      수도권 전철, 도시철도, 버스와의 환승 체계 구축을 통해 편리한 교통망을 형성하고광역급행철도(GTX) 및 주요 KTX·SRT 노선과의 연계를
                      고려한 영업 전략을 수립합니다.
                    </span>
                  </li>
                  <li>
                    <em>수익성 개선 및 추가 수익 창출</em>
                    <span>
                      역세권 개발 및 철도 연계 부동산 사업을 활성화하여 비운임 수익을 창출하고 역사 내 광고, 상업시설 운영, 편의시설 확충 등을 통해
                      부가 수익원을 확보합니다.
                    </span>
                  </li>
                </ul>
              </p>
            </div>

            <div className="business_midcon flex_row">
              <img src={require("../images/business/business_mid06.png")} alt="" />
              <p>
                <strong>운임제도 수립</strong>

                <ul>
                  <li>
                    <em>기본 운임 정책</em>
                    <span>
                      수도권통합요금제 또는 거리 비례 요금제 등을 기반으로 합리적인 운임 체계를 설계합니다. 또한
                      <br />
                      주요 대도시권(부산, 대구, 광주 등)과 수도권 간의 운임 체계를 비교·분석하여 표준화된 요금 정책을 <br />
                      마련합니다.
                    </span>
                  </li>
                  <li>
                    <em>거리 비례 요금제 및 정액제 도입</em>
                    <span>
                      이용 거리에 따라 요금이 증가하는 거리 비례 요금제를 적용하여 공정한 요금 부과를 실현합니다. <br />
                      정기권 및 구간 할인제도를 도입하여 장거리 출퇴근 승객의 부담을 완화합니다.
                    </span>
                  </li>
                  <li>
                    <em>환승 할인 및 교통카드 연계</em>
                    <span>
                      수도권 및 대도시권 환승 시스템과 연계하여 철도·버스 간 환승 할인을 지원하고, 전국 교통카드 및<br /> 모바일 교통 앱과의 연동을
                      강화하여 비접촉 결제 시스템을 확대합니다.
                    </span>
                  </li>
                </ul>
              </p>
            </div>

            <div className="business_midcon">
              <img src={require("../images/business/business_mid07.jpg")} alt="" />
              <p>
                <strong>수익성 강화</strong>

                <ul>
                  <li>
                    <em>비운임 수익 창출</em>
                    <span>
                      역 내부에 쇼핑몰, 편의점, 카페, 공유 오피스 등을 유치하여 상업시설 운영을 활성화하고, 역사 내 광고 공간을 확대하여 수익원을
                      다각화 합니다.
                    </span>
                  </li>
                  <li>
                    <em>차별화된 요금제 도입</em>
                    <span>
                      마일리지 적립제를 도입하여 광역철도를 자주 이용하는 승객에게 운임 할인을 제공하면, 장기적인 이용객 증가 효과도 기대할 수
                      있습니다.
                    </span>
                  </li>
                  <li>
                    <em>탄소중립 및 친환경 경영</em>
                    <span>
                      주요 관광지와 연계한 광역철도+관광 패스를 운영하여, 공항철도·KTX·SRT와 연계한 환승 패키지를 도입하면 관광 수요를 철도로 유인할
                      수 있습니다.
                    </span>
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="business_bot">
            {" "}
            <h3>간선여객 연도별 개통현황</h3>
            <table className="offer table">
              <thead>
                <tr>
                  <th>개통일</th>
                  <th>운행구간</th>
                  <th>개통일</th>
                  <th>운행구간</th>
                </tr>
              </thead>
              <tbody>
                {wide.map((item, index) => (
                  <tr key={index}>
                    <td>{item.open}</td>
                    <td>{item.local}</td>
                    <td>{item.open2}</td>
                    <td>{item.local2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CustomTabPanel>

        {/* 물류사업 */}
        <CustomTabPanel value={value} index={2}>
          <div className="business_top top3">
            <div className="business_intro_txt">
              <span>기존 운송사업에서 벗어나 사업영역 확장을 통해 글로벌 종합물류기업으로의 도약을 진행하고 있습니다.</span>
              <p>
                <em>연간 수송량은 21,257톤 수준이며, 화물 영업거리는 3,104km, 일일 181회 화물열차 운행과 75개 화물취급역을 운영하고</em>
                <em>있습니다. (24년 말기준) 물류사업본부는 친환경 정부정책에 부응하여 고효율·친환경적인 화물열차 운행으로 국가물류비를 절감하고</em>
                <em>정부의 탄소중립 정책에 적극 부응하겠으며, 철저한 국제화물열차 운행 준비를 통해 미래 대륙철도 시대를 대비하겠습니다.</em>
              </p>
            </div>
          </div>

          <div className="business_mid">
            <h3>화물철도 운송사업 </h3>
            <p>
              전국적인 철도망을 활용하여 대량의 화물을 효율적으로 수송하는 핵심 물류 시스템입니다. 철도는 한 번에 많은 화물을 운송할 수 있어 물류
              비용을 절감할 수 있으며, 탄소 배출량이 적어 친환경적인 운송 수단으로 주목받고 있습니다.
            </p>
            <div className="business_midcon ">
              <img src={require("../images/business/business_mid08.jpg")} alt="" />
              <p>
                <strong>대량 화물 운송을 통한 물류 효율성 향상</strong>

                <ul>
                  <li>
                    <em>주요 화물 운송 품목</em>
                    <span>
                      석탄, 철강, 시멘트 등 건설 및 제조업에 필수적인 자원을 안정적으로 공급하고, 컨테이너 화물을 운송하여 수출입 물류와 연계된 대형
                      물류 시스템을 지원합니다.
                    </span>
                  </li>
                  <li>
                    <em>안정적인 운송 시스템 구축</em>
                    <span>
                      철도는 기상 조건이나 도로 정체의 영향을 적게 받아 일정한 운송 시간을 보장할 수 있습니다. 또한, 정기적인 스케줄에 따라 운영되므로
                      기업들이 안정적인 공급망을 구축하는 데 도움이 됩니다.
                    </span>
                  </li>
                  <li>
                    <em>도로교통 혼잡 완화</em>
                    <span>
                      대량 화물을 철도로 운송하면 고속도로 및 일반 도로의 트럭 운행을 줄일 수 있어 교통 혼잡이 완화되고, 이는 도로 유지보수 비용
                      절감에도 기여하며, 물류 인프라의 지속 가능성을 높이는 데 도움을 줍니다.
                    </span>
                  </li>
                </ul>
              </p>
            </div>

            <div className="business_midcon flex_row">
              <img src={require("../images/business/business_mid10.png")} alt="" />
              <p>
                <strong>친환경 물류 시스템 구축</strong>

                <ul>
                  <li>
                    <em>탄소 배출 절감 효과</em>
                    <span>
                      화물 열차는 트럭 대비 이산화탄소 배출량이 약 1/8 수준으로, 대기오염을 줄이는 데 큰 역할을 합니다.
                      <br /> 또한 정부의 탄소중립 정책과 연계하여 친환경 화물 운송 시스템 확대를 추진하고 있습니다.
                    </span>
                  </li>
                  <li>
                    <em>친환경 물류 인프라 확충</em>
                    <span>
                      전기 기관차와 친환경 동력원을 활용한 열차 운행을 점진적으로 확대하고 철도역과 연계한 스마트 물류 터미널을 구축하여 에너지 절감
                      및 친환경 물류 시스템을 강화하고 있습니다.
                    </span>
                  </li>
                  <li>
                    <em>기업 ESG(환경·사회·지배구조) 경영 지원</em>
                    <span>
                      최근 기업들은 ESG 경영을 중요하게 여기고 있으며, 친환경 운송 수단인 철도를 활용하는 사례가 증가하고 있습니다. 코레일은
                      화물열차를 이용하는 기업들에게 탄소 감축 효과를 제공하는 등 ESG 경영 지원 정책을 확대하고 있습니다.
                    </span>
                  </li>
                </ul>
              </p>
            </div>

            <div className="business_midcon">
              <img src={require("../images/business/business_mid09.jpg")} alt="" />
              <p>
                <strong>철도 중심의 스마트 물류 체계 구축</strong>

                <ul>
                  <li>
                    <em>철도·도로 연계 복합운송철도·도로 연계 복합운송</em>
                    <span>
                      컨테이너 화물을 철도로 운송한 후, 최종 목적지까지는 트럭을 이용하는 방식으로 효율적인 복합운송 체계를 운영하고 있습니다.이를
                      통해 물류 비용을 절감하고, 고객의 다양한 수요를 충족할 수 있습니다.
                    </span>
                  </li>
                  <li>
                    <em>스마트 물류 허브 구축</em>
                    <span>
                      주요 철도역을 물류 거점으로 활용하여 자동화 창고, 무인 하역 시스템, AI 기반 물류 운영 시스템을 도입하고 있습니다. 이러한 스마트
                      물류 시스템을 통해 화물 운송 속도를 높이고, 운영 비용을 절감하는 효과를 기대할 수 있습니다.
                    </span>
                  </li>
                  <li>
                    <em>글로벌 물류 네트워크와 연계</em>
                    <span>
                      코레일은 국제 화물 철도망과 연계하여 중국, 유럽 등과 연결된 철도 화물 운송도 추진하고 있습니다. 이를 통해 국내 기업들의 해외
                      물류 경쟁력을 높이고, 국제적인 물류 네트워크를 강화하는 데 기여하고 있습니다.
                    </span>
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="business_bot">
            {" "}
            <h3>간선여객 연도별 개통현황</h3>
            <table className="offer table">
              <thead>
                <tr>
                  <th>개통일</th>
                  <th>운행구간</th>
                  <th>개통일</th>
                  <th>운행구간</th>
                </tr>
              </thead>
              <tbody>
                {coupang.map((item, index) => (
                  <tr key={index}>
                    <td>{item.open}</td>
                    <td>{item.local}</td>
                    <td>{item.open2}</td>
                    <td>{item.local2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CustomTabPanel>
      </Box>
    </section>
  );
}

export default Business;
