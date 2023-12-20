import { useContext } from 'react';
import { SubjectDataContext } from '../../../contexts/SubjectDataContext';
import ButtonBox from '../ButtonBox/ButtonBox';
import styles from './Answer.module.css';
import { getElapsedTime } from '../../../utils/getElapsedTime';

export default function Answer({
  answer,
  textareaValue,
  handleTextareaChange,
  editCheck,
  handleAnswerEdit,
  handleAnswerCreate,
}) {
  const { content, createdAt, isRejected } = answer || {};

  const { id: subjectId, name, imageSource } = useContext(SubjectDataContext);
  const isId = localStorage.getItem('id') == subjectId;

  return (
    <div className={styles.wrap}>
      <img className={styles.imageSource} src={imageSource} alt='사용자 이미지' />
      <div className={styles.answerWrap}>
        <div className={styles.nameWrap}>
          <span className={styles.name}>{name}</span>
          {answer && <span className={styles.createdAt}>{getElapsedTime(createdAt)}</span>}
        </div>

        {answer ? (
          editCheck ? (
            <>
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
                <ButtonBox className='darkButton' text={textareaValue} handleButtonClick={handleAnswerEdit}>
                  수정 완료
                </ButtonBox>
              </form>
            </>
          ) : isRejected ? (
            <p className={styles.reject}>답변 거절</p>
          ) : (
            <p className={styles.accept}>{content}</p>
          )
        ) : isId ? (
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
            <ButtonBox className='darkButton' text={textareaValue} handleButtonClick={handleAnswerCreate}>
              답변 완료
            </ButtonBox>
          </form>
        ) : (
          <p className={styles.accept}>곧 답변을 드리겠습니다.</p>
        )}
      </div>
    </div>
  );
}
