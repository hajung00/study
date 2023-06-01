//import hooks
import useMap from '@/hooks/useMap';
import useCurrentStore from '@/hooks/useCurrentStore';

//import types
import { NaverMap } from '@/types/map'

//import component
import Map from './Map'
import Markers from './Markers';

const  MapSection = () => {
  //hooks로 map 전역에 저장
  const {initializeMap} = useMap();
  const {cleartCurrentStore} = useCurrentStore()

  const onLoadMap = (map:NaverMap)=>{
    initializeMap(map)
    naver.maps.Event.addListener(map,'click',cleartCurrentStore);
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
