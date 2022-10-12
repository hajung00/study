import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: '홍길동',
    content: '홍길동입니다.',
    emotion: 1,
    created_data: new Date().getTime(),
  },
  {
    id: 2,
    author: '아무개',
    content: '아무개입니다.',
    emotion: 3,
    created_data: new Date().getTime(),
  },
  {
    id: 3,
    author: '김하정',
    content: '김하정입니다.',
    emotion: 5,
    created_data: new Date().getTime(),
  },
];
function App() {
  return (
    <div>
      <DiaryEditor />
      <DiaryList diarylist={dummyList} />
    </div>
  );
}

export default App;
