import React, { useState, useEffect } from "react";
import "../../css/Section6.css";
import logo from "../../images/fee/logo_ktx.png";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Autocomplete, TextField } from "@mui/material";
import {NavLink} from 'react-router-dom';

function Section6() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([]);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [selectedFare, setSelectedFare] = useState(null);
  const [uniqueDep, setUniqueDep] = useState([]);
  const [uniqueArr, setUniqueArr] = useState([]);

  // json data 불러오기
  useEffect(() => {
    fetch("/ktx_fee.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.ktx);
        setUniqueDep([...new Set(data.ktx.map(item => item.dep))]);
        setDeparture(data.ktx[0].dep);
        setArrival(data.ktx[0].arr);
        setSelectedFare(data.ktx[0]);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  useEffect(() => {
    const filteredArrivals = data
      .filter((item) => item.dep === departure)
      .map((item) => item.arr);
    setUniqueArr([...new Set(filteredArrivals)]);
    setArrival(filteredArrivals[0] || "");
  }, [departure, data]);

  const handleSearch = () => {
    const fare = data.find(
      (item) => item.dep === departure && item.arr === arrival
    );
    setSelectedFare(fare);
  };
  // 원화 ',' 표시
  const formatPrice = (price) => {
    return price.toLocaleString() + "원";
  };


  // selectBox에 Mui comboBox 적용
  <Autocomplete
  options={uniqueDep}
  value={departure}
  onChange={(event, newValue) => setDeparture(newValue)}
 
  renderInput={(params) => (
    <TextField {...params} variant="outlined" />
  )}
/>

  return (
    <section className="fee">
      <h3 className="hidden">열차운임조회</h3>
      <div className="inner">
        <div className="left">
          <strong data-aos="fade-up">
            <img src={logo} alt="로고" /> 열차운임조회
          </strong>
          <p data-aos="fade-up"> 출발지와 도착지를 입력하고 열차운임을 조회하세요.</p>
          <div className="search_box">
            <div>
              <span>출발지</span>
              <Autocomplete
                options={uniqueDep}
                value={departure}
                onChange={(event, newValue) => setDeparture(newValue)}
                renderInput={(params) => <TextField {...params} variant="outlined" 
               
                />}
              />
            </div>
            <div>
              <span>도착지</span>
              <Autocomplete
                options={uniqueArr}
                value={arrival}
                onChange={(event, newValue) => setArrival(newValue)}
                renderInput={(params) => <TextField {...params} variant="outlined" />}
              />
            </div>
            <button onClick={handleSearch}>검색</button>
          </div>
        </div>
        <ul className="right">
          {["일반실", "우등실", "특실"].map((type, index) => (
            <li
              key={index}
              className={activeIndex === index ? "on" : ""}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <ul>
                <li>
                  {type}
                  <span>
                    <NavLink to="./Fee"><RiArrowRightUpLine /></NavLink>
                  </span>
                </li>
                <li>
                  <p>
                    {selectedFare ? (
                      index === 0
                        ? formatPrice(selectedFare.standard)
                        : index === 1
                        ? formatPrice(selectedFare.standard + selectedFare.Excellent_charge)
                        : formatPrice(selectedFare.standard + selectedFare.First_charge)
                    ) : (
                      "--원"
                    )}
                  </p>
                  {index !== 0 && (
                    <span>
                      * 운임 {selectedFare ? formatPrice(selectedFare.standard) : "--"} / 요금 {selectedFare ? formatPrice(index === 1 ? selectedFare.Excellent_charge : selectedFare.First_charge) : "--"}
                    </span>
                  )}
                </li>
                <li>
                  승차권은 온라인(코레일톡 앱)과 역, 네이버 기차예매, 카카오T,
                  승차권 판매 대리점에서 구매할 수 있습니다.
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Section6;
