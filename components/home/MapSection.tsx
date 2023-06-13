
//import hooks
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap';
import useCurrentStore from '@/hooks/useCurrentStore';

//import types
import { NaverMap } from '@/types/map'

//import component
import Map from './Map'
import Markers from './Markers';
import { useMemo } from 'react';
import { useRouter,useSearchParams } from 'next/navigation';

const  MapSection = () => {
  //hooks로 map 전역에 저장
  const {initializeMap} = useMap();
  const {cleartCurrentStore} = useCurrentStore()

  const router = useSearchParams();
  const query = [router.get('zoom'),router.get('lat'),router.get('lng')]
  
  console.log(query)
 
 const initialZoom = useMemo(()=>(
  query[0]?Number(query[0]):INITIAL_ZOOM
 ),[query[0]])

 const initialCenter = useMemo(()=>(
  query[1]&&query[2]?[Number(query[1]),Number(query[2])]:INITIAL_CENTER
 ),[query[0]])
 

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
