import React from 'react';
import DiaryItem from './DiaryItem';

function DiaryList({ diarylist, onDelete }) {
  return (
    <div className='DiaryList'>
      <h2>일기 리스트</h2>
      <h4>{diarylist.length}개의 일기 </h4>
      <div>
        {diarylist.map((item) => (
          <DiaryItem key={item.id} {...item} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

DiaryList.defaultProps = {
  diarylist: [],
};

export default DiaryList;
