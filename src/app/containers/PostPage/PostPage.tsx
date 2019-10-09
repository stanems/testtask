import React from 'react';
import { connect } from 'react-redux';
import { AppStore, Post } from '../../utils/types';
import Question from '../../components/Question';
import AnswersList from '../../components/AnswersList';

import './style.css';

interface Props {
  post: Post;
}

const PostPage: React.FC<Props> = (props) => {
  const { question, answers } = props.post;

  return (
    <div className="post__container">
      {question && <Question question={question} />}
      {answers && <AnswersList answers={answers} />}
    </div>
  );
};

export default connect((state: AppStore) => ({
  post: state.selectedPost,
}))(PostPage);
