import React from 'react';

function DiaryItem({ id, author, content, emotion, created_data }) {
  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span>
          작성자: {author} | 감정점수: {emotion}
        </span>
        <br />
        <span className='date'>{new Date(created_data).toLocaleString()}</span>
      </div>
      <div className='content'>{content}</div>
    </div>
  );
}

export default DiaryItem;
