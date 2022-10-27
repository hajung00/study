import React, { useContext, useEffect, useState } from 'react';
import Mybutton from '../coponents/Mybutton';
import Myheader from '../coponents/Myheader';
import { DiaryStateContext } from './../App';
import DiaryList from '../coponents/DiaryList';

function Home() {
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      setData(
        diaryList.filter(
          (item) => item.date >= firstDay && item.date <= lastDay
        )
      );
    }
  }, [diaryList, curDate]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <Myheader
        headText={headText}
        leftChild={<Mybutton text={'<'} onClick={decreaseMonth} />}
        rightChild={<Mybutton text={'>'} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={diaryList} />
    </div>
  );
}

export default Home;
