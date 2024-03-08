import { useEffect } from "react";

//import types
import  { Marker } from "../../types/map"

const  Marker = ({map, coordinates,icon,onClick}:Marker):null => {

    useEffect(()=>{
    //지도에 store marker로 표시
    let marker:naver.maps.Marker | null = null;
    if(map){
        marker = new naver.maps.Marker({
            map:map,
            position: new naver.maps.LatLng(...coordinates),
            icon,
        })
    }

    //marker 클릭하면 event
    if(onClick){
        naver.maps.Event.addListener(marker,'click',onClick);
    }

    return () => {
        marker?.setMap(null);
      };
    },[map])
    
    return null;
}

export default Marker