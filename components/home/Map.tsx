import React, {useEffect, useRef} from 'react';
import Script from 'next/script';
import { Coordinates } from '../../types/store';
import { NaverMap } from '../../types/map';
import { INITIAL_CENTER, INITIAL_ZOOM } from '../../hooks/useMap';

import styles from '../../styles/map.module.scss';


type Props = {
    mapId?:string;
    initialCenter?:Coordinates;
    initialZoom?: number;
    onLoad?: (map: NaverMap) => void;
}

const  Map = ({
    mapId = 'map',
    initialCenter = INITIAL_CENTER,
    initialZoom = INITIAL_ZOOM,
    onLoad,
}:Props) => {
    const mapRef = useRef<NaverMap | null>(null);

    //지도 설정
    const initializeMap = () => {
        const mapOptions = {
          center: new window.naver.maps.LatLng(...initialCenter),
          zoom: initialZoom,
          minZoom: 9,
          scaleControl: false,
          mapDataControl: false,
          logoControlOptions: {
            position: naver.maps.Position.BOTTOM_LEFT,
          },
        };
    
        const map = new window.naver.maps.Map(mapId, mapOptions);
        mapRef.current = map;
    
        if (onLoad) {
          onLoad(map);
        }
      };

    //지도가 이미 있는 경우 없애줌
    useEffect(() => {
        return () => {
          mapRef.current?.destroy();
        };
      }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      {/* 지도 그려질 영역 */}
      <div id={mapId} className={styles.map} />
    </>
  )
}

export default Map
