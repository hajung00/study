import React, { useState, useRef } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id: 1,
//     author: '홍길동',
//     content: '홍길동입니다.',
//     emotion: 1,
//     created_data: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: '아무개',
//     content: '아무개입니다.',
//     emotion: 3,
//     created_data: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: '김하정',
//     content: '김하정입니다.',
//     emotion: 5,
//     created_data: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_data = new Date().getTime();
    console.log(author, content, emotion);
    const newItem = {
      author,
      content,
      emotion,
      created_data,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diarylist={data} />
    </div>
  );
}

export default App;
