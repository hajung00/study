'use client'
import { useRouter } from 'next/navigation';
import { Store } from '../../types/store';
import styles from '../../styles/detail.module.scss'
import DetailHeader from '../../components/home/DetailHeader'
import DetailContent from '../../components/home/DetailContent'
import useCurrentStore from '../../hooks/useCurrentStore';


interface Props {
  store: Store;
}

export default async function StoreDetail({ params }: Props  ) {
  const {setCurrentStore} = useCurrentStore();
  const router = useRouter();

  const stores = (await import('../../public/store.json')).default;
  const store = stores.find((store) => store.name === params?.name);
  
  const expanded = true

  const goToMap = ()=>{
    setCurrentStore(store)
    router.push(`/?zoom=15&lat=${store?.coordinates[0]}&lng=${store?.coordinates[1]}`)
  }
  return(
    <>
      <div className={`${styles.detailSection} 
    ${store?styles.selected : ''} 
    ${expanded?styles.expanded : ''}`}>
     <DetailHeader
        currentStore={store}
        expanded={expanded}
        onClickArrow={goToMap}
      />
      <DetailContent currentStore ={store} expanded = {expanded}/>
    </div>
    </>
  )

}



export  async function generateStaticParams() {
    const stores = (await import('../../public/store.json')).default;
  return stores.map((store) => ({store: store  }));
};
