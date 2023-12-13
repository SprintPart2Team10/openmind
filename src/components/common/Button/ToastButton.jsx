import { useState } from 'react';
import Toast from './Toast.jsx';
import linkIcon from '../../../images/linkBrown.svg';

export default function ToastButton() {
  const [toastMessage, setToastMessage] = useState('');

  const handleButtonClick = () => {
    setToastMessage('URL이 복사되었습니다');
  };

  return (
    <div>
      <button type="button" onClick={handleButtonClick}>
        <img src={linkIcon} alt="토스트 아이콘" />
      </button>

      {toastMessage && <Toast pop={toastMessage} />}
    </div>
  );
}
