import React, { useRef, useState, useEffect, useContext } from 'react';
import { DiaryDispatchContext } from './App';

function DiaryEditor() {
  const { onCreate } = useContext(DiaryDispatchContext);

  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });

  const authorInput = useRef();
  const contentInput = useRef();

  const onChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert('저장');
    setState({
      author: '',
      content: '',
      emotion: 1,
    });
  };

  return (
    <div className='DiaryEditor'>
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name='author'
          value={state.author}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name='content'
          value={state.content}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <select name='emotion' value={state.emotion} onChange={onChangeHandler}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장</button>
      </div>
    </div>
  );
}

export default React.memo(DiaryEditor);
