import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/header.module.scss';
import MapLogo from '../../public/map-logo.png' 

interface Props {
  rightElements?: React.ReactElement[];
}

const HeaderComponent = ({ rightElements }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link
          href="/"
          className={styles.box}
          aria-label="홈으로 이동"
        >
          <Image
            src={MapLogo}
            width={110}
            height={50}
            alt="map 로고"
          />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
};

export default HeaderComponent;
