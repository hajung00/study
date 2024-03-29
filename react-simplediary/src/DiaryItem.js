import React, { useState, useRef, useEffect, useContext } from 'react';
import { DiaryDispatchContext } from './App';

function DiaryItem({ id, author, content, emotion, created_data }) {
  const { onRemove, onEdit } = useContext(DiaryDispatchContext);

  useEffect(() => {
    console.log(`${id}번째 랜더`); //???????
  });

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const [localContent, setLocalContent] = useState(content);

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span>
          작성자: {author} | 감정점수: {emotion}
        </span>
        <br />
        <span className='date'>{new Date(created_data).toLocaleString()}</span>
      </div>
      <div className='content'>
        {isEdit ? (
          <>
            {' '}
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => {
                setLocalContent(e.target.value);
              }}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제</button>
          <button onClick={toggleIsEdit}>수정</button>
        </>
      )}
    </div>
  );
}

export default React.memo(DiaryItem);
