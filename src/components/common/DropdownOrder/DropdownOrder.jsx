import { useState } from 'react';
import arrowUpImage from '../../../images/icons/arrowUp.svg';
import arrowDownImage from '../../../images/icons/arrowDown.svg';
import styles from './DropdownOrder.module.css';

export default function DropdownOrder({ list, handleButtonClick, clickList }) {
  const [isDropdownView, setDropdownView] = useState(false);
  const setTime = 200;

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, setTime);
  };

  return (
    <div className={!isDropdownView ? styles.orderBox : styles.orderBoxOpen} onBlur={handleBlurContainer}>
      <button className={!isDropdownView ? styles.orderButton : styles.orderButtonOpen} onClick={handleClickContainer}>
        {clickList}
        {!isDropdownView ? (
          <img className={styles.arrowDown} src={arrowDownImage} alt='기본 화살표' />
        ) : (
          <img className={styles.arrowUp} src={arrowUpImage} alt='오픈 화살표' />
        )}
      </button>
      {isDropdownView && (
        <ul className={styles.orderList}>
          {list.map((buttonName) => (
            <li className={styles.order} key={buttonName} onClick={handleButtonClick}>
              {buttonName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
