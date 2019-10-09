import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppStore, Question as QuestionType } from '../../utils/types';
import { RouteComponentProps, withRouter } from 'react-router';
import Question from '../../components/Question';
import AnswersList from '../../components/AnswersList';
import { fetchPost } from '../../store/actions';

import './style.css';

type RouteParams = {
  id: string;
};

type Props = RouteComponentProps<RouteParams> & {
  post: QuestionType;
  fetchPost: (id: string) => void;
};

const PostPage: React.FC<Props> = (props) => {
  const { fetchPost, post } = props;
  const { id } = props.match.params;

  useEffect(() => fetchPost(id), [fetchPost, id]);

  return (
    <div className="post__container">
      {post && <Question question={post} />}
      {post && post.answers && <AnswersList answers={post.answers} />}
    </div>
  );
};

export default withRouter(connect((state: AppStore) => ({
  post: state.selectedPost,
}), {
  fetchPost,
})(PostPage));
