"use client"
import HomeHeader from '@/home/Header'
import MapSection from '../home/MapSection'
import {use} from 'react'
import { Store } from '@/types/store'
import useStores from '@/hooks/useStores'
import { useEffect } from 'react'

const Home = () => {
  const stores:Store[] = use(getMapApi());

  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);


  return (
    <> 
    <HomeHeader/>
    <main style={{ width: '100%', height: '100%' }}>
      <MapSection/>
    </main></>
  )
}

export default Home;

export async function getMapApi(){
  const stores = (await import('../public/store.json')).default
  return stores
}