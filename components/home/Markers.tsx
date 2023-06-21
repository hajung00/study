import React from 'react';
import useSWR from 'swr';

//import hooks
import { MAP_KEY } from '../../hooks/useMap';
import { STORE_KEY } from '../../hooks/useStores';
import useCurrentStore, { CURRENT_STORE_KEY } from '../../hooks/useCurrentStore';

//import types
import { NaverMap } from '../../types/map';
import { Store } from '../../types/store';
import { ImageIcon } from '../../types/map';

//import conponent
import Marker from './Marker'

const  Markers = () => {
  // 전역에 저장한 map, store 가져오기
  const {data:map} = useSWR<NaverMap>(MAP_KEY)
  const {data:stores} = useSWR<Store[]>(STORE_KEY)

  // store 클릭 시 필요한 click event와 클릭된 store정보인 currentstore 가져오기
  const {data:currentstore}=useSWR<Store>(CURRENT_STORE_KEY)
  const {setCurrentStore,cleartCurrentStore} = useCurrentStore();
  

  if (!map || !stores) return null;


  return (
    <>
    {/* 가져온 stores를 마커로 표시하기 위해 Marker에 store정보 전달 */}
    {
        stores.map((store)=>{
          // console.log(store.season)
            return(
                <Marker
                map={map}
                coordinates={store.coordinates}
                icon={generateStoreMarkerIcon(store.season,false)}
                key={store.nid}
                onClick={()=>{
                  setCurrentStore(store)
                }}
                />
            )
        })
    }
    {
      // 클릭된 store정보가 있는 경우 기존 store clear
      currentstore&&(
        <Marker
        map={map}
        coordinates={currentstore.coordinates}
        icon={generateStoreMarkerIcon(currentstore.season,true)}
        key={currentstore.nid}
        onClick={cleartCurrentStore}
        />
      )
    }
    </>
  )
}

export default Markers;


//marker icon으로 표시
const MARKER_HEIGHT = 64;
const MARKER_WIDTH = 54;
const NUMBER_OF_MARKER = 13;
const SCALE = 2 / 3;

const SCALED_MARKER_WIDTH = MARKER_WIDTH * SCALE;
const SCALED_MARKER_HEIGHT = MARKER_HEIGHT * SCALE;

export function generateStoreMarkerIcon(markerIndex: number, isSelected:boolean): ImageIcon {
    return {
      url: isSelected?'images/markers-selected.png':'images/markers.png',
      size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT),
      origin: new naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0),
      scaledSize: new naver.maps.Size(
        SCALED_MARKER_WIDTH * NUMBER_OF_MARKER,
        SCALED_MARKER_HEIGHT
      ),
    };
  }
