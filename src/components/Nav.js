import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && 'nav_black'}`}>
      <img
        alt='Netflix_Logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        className='nav_logo'
        onClick={() => window.location.reload()}
      />
      <input
        value={searchValue}
        onChange={handleChange}
        className='nav__input'
        type='text'
        placeholder='영화를 검색하세요.'
      />
      <img
        alt='User_Logged'
        src='https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg'
        className='nav_avatar'
      />
    </nav>
  );
}
