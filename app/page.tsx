"use client"
import HomeHeader from '@/components/home/Header'
import MapSection from '../components/home/MapSection'
import {use} from 'react'
import { Store } from '@/types/store'
import useStores from '@/hooks/useStores'
import { useEffect } from 'react'
import DetailSection from '@/components/home/DetailSection'

const Home = () => {
  const stores:Store[] = use(getMapApi());

  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);


  return (
    <> 
    <HomeHeader/>
    <main style={{ position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden', }}>
      <MapSection/>
      <DetailSection/>
    </main></>
  )
}

export default Home;

export async function getMapApi(){
  const stores = (await import('../public/store.json')).default
  return stores
}