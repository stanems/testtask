import React from 'react';
import _ from 'lodash';
import Answer from '../Answer';
import { Answer as AnswerType } from '../../utils/types';

import './style.css';

interface Props {
  answers: AnswerType[];
}

const AnswersList: React.FC<Props> = (props) => {
  const { answers } = props;

  return (
    <div className="answersList__container">
      {_.map(answers, answer => <Answer answer={answer} />)}
    </div>
  );
};

export default AnswersList;
