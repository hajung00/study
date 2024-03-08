import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DiaryEditor from '../coponents/DiaryEditor';
import { DiaryStateContext } from './../App';

function Edit() {
  const nagative = useNavigate();
  const diaryList = useContext(DiaryStateContext);
  const { id } = useParams();

  const [originData, setOriginData] = useState();

  useEffect(() => {
    if (diaryList.length > 1) {
      const targetDiary = diaryList.find(
        (item) => parseInt(item.id) === parseInt(id)
      );
      console.log(targetDiary);
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        alert('없는 일기입니다.');
        nagative('/', { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
}

export default Edit;
