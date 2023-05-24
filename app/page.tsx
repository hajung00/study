import Header from '../components/Header'
import MapSection from '../home/MapSection'
import styles from '../styles/header.module.scss'
import {AiOutlineShareAlt, VscFeedback} from 'react-icons/all'
import Link from 'next/link'
import { NextPage } from 'next'
import {use} from 'react'
import { Store } from '@/types/store'

const Home = () => {
  const stores:Store[] = use(getMapApi());
  console.log(stores[0].nid)
  
  return (
    <> 
    <Header
    rightElements={[
      <button
      // onClick={()=>{
      //   alert('복사');
      // }}
      className={styles.box}
      style={{marginRight:5}}
      key="button"><AiOutlineShareAlt size={20}/></button>,
      <Link href='/feedback' className={styles.box} key='link'><VscFeedback size={20}/></Link>
    ]}
    />
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