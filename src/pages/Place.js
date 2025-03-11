import React, { useState, useEffect } from 'react';
import '../css/sub5.css';

import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';
import TaskDisplay from './TaskDisplay';


function Place() {
  const [stations, setStations] = useState([]); //데이터베이스의 전체 문서들 저장
  const [station, setStation] = useState({}); //데이터베이스의  seoul 문서들 저장
  const [searchtext, setSearchtext] = useState(''); //검색 text 저장
  const [notext, setNotext] = useState(true); //검색데이터의 유무체크 

  const changeHandler = (e) => {
    setSearchtext(e.target.value);  //검색어 입력처리
  }

  const load = () => {
    var loadObj = [];
    getDocs(collection(db, "station"))   //파이어베이스의 station 컬렉션의 모든 문서를 가져온다
      .then(r => {    //가져온 문서들이 매개변수 r 에 저장
        r.forEach((doc) => {
          //console.log(`${doc.id} => ${doc.data().todo}`);
          let obj = {
            address: doc.data().address,
            line: doc.data().line,
            image: doc.data().image,
            tel: doc.data().tel,
            stationName: doc.data().stationName,

            place1address: doc.data().place1address,
            place1img: doc.data().place1img,
            place1name: doc.data().place1name,
            place1tel: doc.data().place1tel,

            place2address: doc.data().place2address,
            place2img: doc.data().place2img,
            place2name: doc.data().place2name,
            place2tel: doc.data().place2tel,

            place3address: doc.data().place3address,
            place3img: doc.data().place3img,
            place3name: doc.data().place3name,
            place3tel: doc.data().place3tel,

            place4address: doc.data().place4address,
            place4img: doc.data().place4img,
            place4name: doc.data().place4name,
            place4tel: doc.data().place4tel,
          };
          //문서를 객체배열에 담는다

          loadObj = [...loadObj, obj];
        })

        //console.log(loadObj); //객체 배열이 저장된 것을 확인한다
        setStations(loadObj);  //스테이트 sations에 저장한다
        //setStation(loadObj[0]); //스테이트 sation에 저장한다

        // 서울역을 초기값으로 설정
        const seoulStation = loadObj.find(station => station.stationName === "서울역");
        if (seoulStation) {
          setStation(seoulStation);
        } else {
          setStation(loadObj[0]); // 서울역이 없는 경우 첫 번째 역으로 설정
        }
      });

  }

  useEffect(() => {
    load();  //처음 페이지 로드 시 db에서 데이터 가져오기 
  }, []);

  const searchHandler = (st,e) => {  //검색 버튼을 클릭시 검색어를 매개변수로 넘겨준다
    e.preventDefault();

    console.log('검색어:', st);
    console.log('전체 stations:', stations);


    if (st) {  //검색어가 있으면
      const filterstation = stations.filter((element) =>
        element && element.stationName && element.stationName.includes(st)
      );
      
      //console.log(filterstation); //검색된 객체가 저장되는지 확인

    if (filterstation.length !== 0) { //검색된 문서가 있으면
      setStation(filterstation[0]); 
      setSearchtext('');  //입력어 제거
      setNotext(true);  //검색된 데이터가 있음

    } else {   //검색된 문서가 없으면
      setNotext(false);//검색된 데이터가 없음
      setSearchtext(''); //입력어 제거
    }
    } else {  //검색어가 없으면
        alert('검색어를 입력하세요.');
    }
  }

  const enterHandler = (e) => {
    //console.log(e.keyCode);
   if (e.keyCode == 13) {
     searchHandler(searchtext, e);
    } 
  }

  return (
    <section className="sub5">
      <div className='sub5_top'>
      </div>
      
      <div className='sub5_wrap'>
        <div className="station">
          <div className='title'>
            <h3>역 위치정보</h3>
            <p>Station Information</p>
          </div>
        
          <div className="serch_box">
            <form>
              {/* <label htmlFor="title">역 명</label> */}
              <div className='search_nameWrap'>
                <input id="title" type="text" placeholder="찾으시는 역명을 입력하세요." value={searchtext} onChange={changeHandler} onKeyDown={(e) => enterHandler(e)} />
                  <div className='search_name'>
                    <span>서울역</span>
                    <span>부산역</span>
                    <span>동대구역</span>
                    <span>광주송정역</span>
                  </div>
              </div>

              <button id="btn" type="button" onClick={(e) => searchHandler(searchtext, e)}>검색</button>    
            </form>
        
            
            {
              notext ? <TaskDisplay station={station} /> : <p className='message'>검색된 역이 없습니다.</p>
            }
            
          </div>
        </div>
      </div>
    </section>
  );
}



export default Place;