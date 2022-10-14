import React, { useContext } from 'react';
import { DiaryStateContext } from './App';
import DiaryItem from './DiaryItem';

function DiaryList() {
  const diarylist = useContext(DiaryStateContext);

  return (
    <div className='DiaryList'>
      <h2>일기 리스트</h2>
      <h4>{diarylist.length}개의 일기 </h4>
      <div>
        {diarylist.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

DiaryList.defaultProps = {
  diarylist: [],
};

export default DiaryList;
