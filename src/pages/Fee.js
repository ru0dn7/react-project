import React, { useState, useEffect } from 'react';
import "../css/sub4.css";
import logo from "../images/fee/logo_ktx.png";
import { Autocomplete, TextField } from "@mui/material";

function Fee() {
    const [data, setData] = useState([]);
    const [selectedDep, setSelectedDep] = useState("");
    const [arrivals, setArrivals] = useState([]);

    useEffect(() => {
        fetch("/ktx_fee.json")
            .then(response => response.json())
            .then(jsonData => {
                if (jsonData.ktx) {
                    setData(jsonData.ktx);
                    const uniqueDeps = [...new Set(jsonData.ktx.map(item => item.dep))];
                    if (uniqueDeps.length > 0) {
                        setSelectedDep(uniqueDeps[0]);
                        setArrivals(jsonData.ktx.filter(item => item.dep === uniqueDeps[0]));
                    }
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleDepChange = (event, value) => {
        setSelectedDep(value);
        setArrivals(data.filter(item => item.dep === value));
    };

    return (
        <section className='sub4'>
            <h2 className='hidden'>열차운임표</h2>
            <div className='sub_visual'></div>
            
            <div className="title"><h3>열차운임표</h3><p>Train Fare Table</p></div>

            <div className='content'>
                <div className='inner'>
                    <div className='select_dep'>
                        <p>출발지</p>
                        <Autocomplete
                            options={[...new Set(data.map(item => item.dep))]}
                            value={selectedDep}
                            onChange={handleDepChange}
                            renderInput={(params) => <TextField {...params} label="출발지 선택" variant="outlined" />}
                        />
                    </div>

                    <ul className='tck_box'>
                        {arrivals.map((item, index) => (
                            <li className='tck_lst' key={index}>
                                <div><img src={logo} alt="로고" /></div>
                                <div>{item.dep} → {item.arr}</div>
                                <div><span>일반실</span><strong>{item.standard.toLocaleString()}원</strong></div>
                                <div><span>우등실</span><strong>{(item.standard + item.Excellent_charge).toLocaleString()}원</strong></div>
                                <div><span>특실</span><strong>{(item.standard + item.First_charge).toLocaleString()}원</strong></div>                            
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Fee;
