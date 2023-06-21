
//import hooks
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '../../hooks/useMap';
import useCurrentStore from '../../hooks/useCurrentStore';

//import types
import { NaverMap } from '../../types/map'

//import component
import Map from './Map'
import Markers from './Markers';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

import type { Coordinates } from '../../types/store';


const  MapSection = () => {
  //hooks로 map 전역에 저장
  const {initializeMap} = useMap();
  const {cleartCurrentStore} = useCurrentStore()

  const router = useRouter();
  const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []); // eslint-disable-line react-hooks/exhaustive-deps
   
  const initialZoom = useMemo(
    () => (query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM),
    [query]
  );

  const initialCenter = useMemo<Coordinates>(
    () =>
      query.get('lat') && query.get('lng')
        ? [Number(query.get('lat')), Number(query.get('lng'))]
        : INITIAL_CENTER,
    [query]
  );
 

  const onLoadMap = (map:NaverMap)=>{
    initializeMap(map)
    naver.maps.Event.addListener(map,'click',cleartCurrentStore);
  }

  return (
    <>
     <Map
      onLoad={onLoadMap}
      initialZoom={initialZoom}
      initialCenter={initialCenter}
    />
    <Markers/>
    </>
  )
}

export default MapSection
