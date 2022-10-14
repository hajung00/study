import React from 'react';

function Mybutton({ text, onClick, type }) {
  const btnType = ['positive', 'nagative'].includes(type) ? type : 'default';

  return (
    <div>
      <button
        className={['Mybutton ', `Mybutton_${btnType}`].join('')}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
Mybutton.defaultProps = {
  type: 'default',
};
export default Mybutton;
