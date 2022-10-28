import React, { useRef, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Mybutton from './Mybutton';
import Myheader from './Myheader';
import { DiaryDispatchContext } from '../App';
import EmotionItem from './EmotionItem';

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + '/assets/emotion1.png',
    emotion_descript: '완전 좋음',
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + '/assets/emotion2.png',
    emotion_descript: '좋음',
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + '/assets/emotion3.png',
    emotion_descript: '그럭저럭',
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + '/assets/emotion4.png',
    emotion_descript: '나쁨',
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + '/assets/emotion5.png',
    emotion_descript: '끔직함',
  },
];

function DiaryEditor({ isEdit, originData }) {
  const navigate = useNavigate();
  const contentRef = useRef();

  const [date, setDate] = useState(getStringDate(new Date()));

  const [emotion, setEmotion] = useState(3);
  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };

  const [content, setContent] = useState('');
  const { onCreate, onEdit } = useContext(DiaryDispatchContext);

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit ? '일기를 수정하시겠습니까?' : '새로운 일기를 작성하시겠습니까?'
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className='DiaryEditor'>
      <Myheader
        headText={isEdit ? '일기 수정하기' : '새 일기쓰기'}
        leftChild={<Mybutton text='< 뒤로가기' onClick={() => navigate(-1)} />}
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className='input_box'>
            <input
              className='input_date'
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type='date'
            />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className='input_box_emotion_list_wrapper'>
            {emotionList.map((item) => (
              <EmotionItem
                key={item.emotion_id}
                {...item}
                onClick={handleClickEmote}
                isSelected={item.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className='input_box_text_wrapper'>
            <textarea
              placeholder='오늘은 어땠나요?'
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              ref={contentRef}
            />
          </div>
        </section>
        <section>
          <div className='control_box'>
            <Mybutton text={'취소하기'} onClick={() => navigate(-1)} />
            <Mybutton
              text={'작성완료'}
              type={'positive'}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default DiaryEditor;
