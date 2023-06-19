import { IoIosArrowUp } from 'react-icons/io';
import useSWR from 'swr';
import { useState } from 'react';

//import hooks
import { CURRENT_STORE_KEY } from '../../hooks/useCurrentStore';

//import style
import styles from '../../styles/detail.module.scss'

//import types
import { Store } from '../../types/store';

//import components
import DetailHeader from './DetailHeader';
import DetailContent from './DetailContent';

const DetailSection = () => {

    const {data:currentStore} = useSWR<Store>(CURRENT_STORE_KEY);
    const [expanded,setExpanded] = useState(false)

  return (
    <div className={`${styles.detailSection} 
    ${currentStore?styles.selected : ''} 
    ${expanded?styles.expanded : ''}`}>
     <DetailHeader
        currentStore={currentStore}
        expanded={expanded}
        onClickArrow={() => setExpanded(!expanded)}
      />
      <DetailContent currentStore ={currentStore} expanded = {expanded}/>
    </div>
  );
};
export default DetailSection;