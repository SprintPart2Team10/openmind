import { useContext } from 'react';
import { SubjectDataContext } from '../../../contexts/SubjectDataContext';
import ButtonBox from '../ButtonBox/ButtonBox';
import styles from './Answer.module.css';
import { getElapsedTime } from '../../../utils/getElapsedTime';

export default function Answer({
  editCheck,
  showAnswerForm,
  answer,
  textareaValue,
  handleTextareaChange,
  handleAnswerEdit,
  handleAnswerCreate,
  handleEditButtonClick,
}) {
  console.log(`editCheck?>>>>>>>>>>>>>>>>>`);
  console.log(editCheck);
  const { id, content, createdAt, questionId, isRejected } = answer || {};

  const { name, imageSource } = useContext(SubjectDataContext);

  // answer 여부에 따라 답변 표시
  return (
    <div className={styles.wrap}>
      {showAnswerForm && <img className={styles.imageSource} src={imageSource} alt='사용자 이미지' />}
      <div className={styles.answerWrap}>
        <div className={styles.nameWrap}>
          {showAnswerForm && <span className={styles.name}>{name}</span>}
          {answer && <span className={styles.createdAt}>{getElapsedTime(createdAt)}</span>}
        </div>

        {/* answer O -> 답변, X : form */}
        {answer ? (
          editCheck ? (
            <form onSubmit={handleAnswerEdit}>
              <textarea
                className={styles.textarea}
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='답변을 입력해주세요'
                onInput={handleTextareaChange}
                value={textareaValue}
              ></textarea>
              <ButtonBox className='darkButton' text={textareaValue}>
                수정 완료
              </ButtonBox>
            </form>
          ) : isRejected ? (
            <p className={styles.reject}>답변 거절</p>
          ) : (
            <p className={styles.accept}>{content}</p>
          )
        ) : (
          showAnswerForm && (
            <form onSubmit={handleAnswerCreate}>
              <textarea
                className={styles.textarea}
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='답변을 입력해주세요'
                onInput={handleTextareaChange}
                value={textareaValue}
              ></textarea>
              <ButtonBox className='darkButton' text={textareaValue}>
                답변 완료
              </ButtonBox>
            </form>
          )
        )}
      </div>
    </div>
  );
}
