import React, { useEffect, useRef } from 'react';

const KakaoMap = ({ address }) => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const infowindowRef = useRef(null);

    useEffect(() => {
        if (!address || !window.kakao) return;

        try {
            // 이전 마커와 인포윈도우 제거
            if (markerRef.current) markerRef.current.setMap(null);
            if (infowindowRef.current) infowindowRef.current.close();

            // 지도 생성
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(37.5666805, 126.9784147),
                level: 3
            };

            const map = new window.kakao.maps.Map(container, options);
            mapRef.current = map;

            // 주소로 좌표 검색
            const geocoder = new window.kakao.maps.services.Geocoder();

            geocoder.addressSearch(address, (result, status) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                    // 마커 생성
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: coords
                    });
                    markerRef.current = marker;

                    // 인포윈도우 생성
                    const infowindow = new window.kakao.maps.InfoWindow({
                        content: `<div style="padding:5px;font-size:12px;">${address}</div>`
                    });
                    infowindow.open(map, marker);
                    infowindowRef.current = infowindow;

                    // 지도 중심 이동
                    map.setCenter(coords);
                } else {
                    console.error('주소 검색 실패:', address);
                }
            });
        } catch (error) {
            console.error('카카오맵 초기화 에러:', error);
        }
    }, [address]);

    return (
        <div id="map" style={{ width: '100%', height: '500px' }}></div>
    );
};

export default KakaoMap;