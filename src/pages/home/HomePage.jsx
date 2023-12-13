import styles from './HomePage.module.css';
import Toast from '../../components/common/Button/Toast';

export default function App() {
  return (
    <div className={styles.home}>
      home
      <Toast pop="URL이 복사되었습니다" />
    </div>
  );
}
