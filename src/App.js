import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

import Mybutton from './coponents/Mybutton';
import Myheader from './coponents/Myheader';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Myheader
          headText={'App'}
          leftChild={
            <Mybutton
              text={'왼쪽버튼'}
              onClick={() => {
                alert('왼쪽버튼 클릭');
              }}
            />
          }
          rightChild={
            <Mybutton
              text={'오른쪽버튼'}
              onClick={() => {
                alert('오른쪽버튼 클릭');
              }}
            />
          }
        />
        <Mybutton
          text={'버튼'}
          onClick={() => {
            alert('버튼 클릭');
          }}
          type={'positive'}
        />
        <Mybutton
          text={'버튼'}
          onClick={() => {
            alert('버튼 클릭');
          }}
          type={'default'}
        />
        <Mybutton
          text={'버튼'}
          onClick={() => {
            alert('버튼 클릭');
          }}
          type={'nagative'}
        />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/new' element={<New />}></Route>
          <Route path='/edit' element={<Edit />}></Route>
          <Route path='/diary' element={<Diary />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
