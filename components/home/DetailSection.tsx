import { IoIosArrowUp } from 'react-icons/io';
import useSWR from 'swr';
import { useState } from 'react';

//import hooks
import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';

//import style
import styles from '../../styles/detail.module.scss'

//import types
import { Store } from '@/types/store';

const DetailSection = () => {

    const {data:currentStore} = useSWR<Store>(CURRENT_STORE_KEY);
    const [expanded,setExpanded] = useState(false)

  return (
    <div className={`${styles.detailSection} 
    ${currentStore?styles.selected : ''} 
    ${expanded?styles.expanded : ''}`}>
      <div className={styles.header}>
        <button className={`${styles.arrowButton}  
        ${expanded ? styles.expanded : ''}`} 
        onClick={()=>setExpanded(!expanded)}
        disabled={!currentStore}>
          <IoIosArrowUp size={20} color="#666666" />
        </button>
        {
            !currentStore?
            <p className={styles.title}>매장을 선택해주세요</p>:
            <p className={styles.title}>{currentStore.name}</p>
        }
      </div>
    </div>
  );
};
export default DetailSection;