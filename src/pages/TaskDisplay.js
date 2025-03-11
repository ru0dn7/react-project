import React from 'react'
//import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import KakaoMap from './sub5/kakaoMap';

const TaskDisplay = ({station}) => {
   
    const sta = station;
   

    // itemData 배열 정의
    const itemData = [
        {
            img: `./sub5/${sta.place1img}`,
            title: sta.place1name,
            author: `위치 : ${sta.place1address}\n 안내전화 : ${sta.place1tel}`,
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: `./sub5/${sta.place2img}`,
            title: sta.place2name,
            author: `위치 : ${sta.place2address}\n 안내전화 : ${sta.place2tel}`,
        },
        {
            img: `./sub5/${sta.place3img}`,
            title: sta.place3name,
            author: `위치 : ${sta.place3address}\n 안내전화 : ${sta.tel}`,
        },
        {
            img: `./sub5/${sta.place4img}`,
            title: sta.place4name,
            author: `위치 : ${sta.place4address}\n 안내전화 : ${sta.tel}`,
        },
 
    ];


    return (
        <div className="output_box">
            <h4 className='staName'>{sta.stationName}</h4>

            <div className='output_map'>
                <p className='subtitle'>출입구정보</p>

                {/* 카카오 맵 컴포넌트 */}
                <div className="map_container">
                    <KakaoMap address={station.address} />
                </div>

            </div>

            <div className='output_info'>
                <p className='subtitle'>기본정보</p>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">주소</th>
                            <th scope="col">연락처</th>
                            <th scope="col">노선</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{sta.address}</td>
                            <td>{sta.tel}</td>
                            <td>{sta.line}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className='output_facility'>
                <p className='subtitle'>층별 시설안내</p>
        
                <ul className="facility_list">
                    {itemData.map((item, index) => (
                        <li key={index} className="facility_item">
                            <img
                                src={item.img}
                                alt={item.title}
                            />
                            <div className="facility_info">
                                <dl>
                                    <dt>{item.title}</dt>
                                    <dd>{item.author}</dd>
                                </dl>
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    
    );
}



export default TaskDisplay;



