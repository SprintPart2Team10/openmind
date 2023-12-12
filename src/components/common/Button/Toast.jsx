import styles from './Toast.module.css';

export default function Toast(props) {
  return (
    <div className={styles.toast}>
      <p className={styles.message}>{props.pop}</p>
    </div>
  );
}
