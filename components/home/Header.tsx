
import React, { useCallback } from 'react';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import HeaderComponent from '../../components/common/Header';
import useMap from '../../hooks/useMap';
import { useRouter } from 'next/navigation';
import copy from 'copy-to-clipboard';

const HomeHeader = () => {

   const {getMapOptions,resetMapOptions} = useMap();

   const router = useRouter();
  

   const replaceAndCopyUrl = useCallback(()=>{
        const mapOptions = getMapOptions(); //현재 위치,zoom 값 가져옴
        const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;//현재 위치, zoom의 값으로 쿼리스트링 생성
        router.replace(query) //생성된 쿼리스트링 이용해 이동
        copy(location.origin+query)//clipboard에 저장
    },[router,getMapOptions])

  return (
    <HeaderComponent
    rightElements={[
      <button
      onClick={replaceAndCopyUrl}
      className={styles.box}
      style={{marginRight:5}}
      key="button"><AiOutlineShareAlt size={20}/></button>,
      <Link href='/feedback' className={styles.box} key='link'><VscFeedback size={20}/></Link>
    ]}
    />
  );
};

export default HomeHeader;
