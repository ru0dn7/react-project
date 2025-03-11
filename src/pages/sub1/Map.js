import React,{ useEffect, useRef } from "react";
import '../../css/sub1/Map.css'

const options = {
  center: new window.kakao.maps.LatLng(36.3317082508479, 127.435993263371),
  level: 3,
};

const Map = () => {
  const container = useRef(null);
  useEffect(() => {
    const map = new window.kakao.maps.Map(container.current, options);
    const markerPosition = options.center;

    const marker = new window.kakao.maps.Marker({ position: markerPosition });
    marker.setMap(map);
  }, []);

  return (
    <div className="mapInner">
      <div className="mapBox" ref={container}></div>
      <div className="mapText">
        <div className='mapTop'>
          <strong>자가용 이용 시</strong>
          <p>경부고속도로 이용 시<br />
          ・경부고속도로(1번) 대전IC → 대전역 동광장(호국철도광장) → 한국철도공사 본사 도착<br />
          호남고속도로 이용 시<br />
          ・호남고속도로(251) → 대전남부순환고속도로(300) 서대전 ‘안영’ 방면으로 진입 →
          <br />통영대전중부고속도로 판암IC 에서 '대전'방면으로 진입 → 대전역 동광장(호국철도광장) → 한국철도공사 본사 도착</p>
        </div>
        <div className='mapBottom'>
          <strong>대중교통 이용 시</strong>
          <p>경부선 KTX 이용 시<br />
          ・대전역 도착<br />
          ・대전역 동광장(호국철도광장) 방면으로 도보 5분 한국철도공사 본사 도착<br />
          호남선 서대전역 이용 시<br />
          ・서대전역 도착<br />
          ・지하철 이용 시 : 대전지하철 1호선 이용 오룡역 승차, 대전역 하차 (4, 5번 출구)<br />
          ・버스 이용 시 : 간선버스 [202] 대전역 동광장(호국철도광장) 하차 후 도보 5분 한국철도공사 본사 도착<br />
          간선버스 [311, 317, 612, 701 ] 대전역 서광장 하차 후 동광장(호국철도광장) 방면으로 도보 5분 한국철도공사 본사 도착<br />
          대전고속버스터미널 이용 시<br />
          ・간선버스 [701] 대전역 동광장(호국철도광장) 하차 후 도보 5분 한국철도공사 본사 도착<br />
          ・간선버스 [201, 611] 급행버스 [2] 대전역 서광장 하차 후 동광장(호국철도광장) 방면으로 도보 5분 한국철도공사 본사 도착</p>
        </div>
      </div>
    </div>

  );
}

export default Map;
