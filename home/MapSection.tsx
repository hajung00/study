//import hooks
import useMap from '@/hooks/useMap';

//import types
import { NaverMap } from '@/types/map'

//import component
import Map from './Map'
import Markers from './Markers';

const  MapSection = () => {
  //hooks로 map 전역에 저장
  const {initializeMap} = useMap();
  const onLoadMap = (map:NaverMap)=>{
    initializeMap(map)
  }

  return (
    <>
     <Map
      onLoad={onLoadMap}
    />
    <Markers/>
    </>
  )
}

export default MapSection
