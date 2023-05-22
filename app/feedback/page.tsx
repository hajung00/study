import Link from 'next/link'
import Header from '../../components/Header'
import styles from '../../styles/header.module.scss'
import {AiOutlineShareAlt, VscFeedback} from 'react-icons/all'

export default function Feedback() {
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
    </>
  )
}
