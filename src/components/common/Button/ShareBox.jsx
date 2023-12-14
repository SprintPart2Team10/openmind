import LinkBox from './LinkBox.jsx';
import SnsBox from './SnsBox.jsx';
import styles from './ShareBox.module.css';

export default function shareBox({ baseURL }) {
  return (
    <div className={styles.shareBox}>
      <LinkBox baseURL={baseURL} />
      <SnsBox />
    </div>
  );
}
