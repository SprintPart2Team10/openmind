import inputIcon from '../../../images/fan.png';
import styles from './InputField.module.css';

export default function InputField({ labelText, defaultText, value, handleInputChange, id, type }) {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {labelText}
      </label>
      <div className={styles.inputContainer}>
        <img className={styles.icon} src={inputIcon} alt='사람 모양 아이콘' />
        <input
          className={styles.input}
          type={type}
          id={id}
          value={value}
          placeholder={defaultText}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}
