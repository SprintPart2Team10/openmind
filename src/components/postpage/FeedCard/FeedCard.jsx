import AnswerMain from '../../page-layout/QuestionPage/Main/AnswerMain';
import Badge from '../../common/Badge/Badge';
import DropdownKebab from '../../common/DropdownKebab/DropdownKebab';
import Question from '../Question/Question';
import Reaction from '../../common/Reaction/Reaction';

import styles from './FeedCard.module.css';

export default function FeedCard({ data, showKebab }) {
  const { id, answer, createdAt, content, like, dislike } = data;

  return (
    <div className={styles.feedCard}>
      <div className={styles.badgeAndKebab}>
        {answer === null ? <Badge className='inActive' text='미답변' /> : <Badge className='active' text='답변 완료' />}
        {showKebab && <DropdownKebab />}
      </div>
      <Question createdAt={createdAt} content={content} />
      <AnswerMain answer={answer} />
      <Reaction id={id} like={like} dislike={dislike} />
    </div>
  );
}
