import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Question, AddDataTypes } from '../../utils/types';
import { Link } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';
import { fetchAddData } from '../../store/actions';

import './style.css';

interface Props {
  item: Question;
  fetchAddData: (data: number | string, type: string) => void;
  history: History;
}

const ResultItem: React.FC<Props & RouteComponentProps> = (props) => {
  const { title, owner, answer_count, tags, question_id } = props.item;
  const { display_name, user_id } = owner;

  const handleClickOnAuthor = () => props.fetchAddData(user_id, AddDataTypes.AUTHOR);
  const handleClickOnTag = (tagName: string) => props.fetchAddData(tagName, AddDataTypes.TAG);

  const renderTags = () => _.map(tags, (tag: string) => (
    <span key={tag} className="link" onClick={() => handleClickOnTag(tag)}>{`${tag} `}</span>
  ));

  return (
    <div className="resultItem__container">
      <p className="resultItem__title">
        <Link
          to={{ pathname: `/post/${question_id}`, state: props.item }}
          className="link"
        >
          {title}
        </Link>
      </p>
      <div className="resultItem__authorAndAndswers">
        <p>Author: <span className="link" onClick={handleClickOnAuthor}>{display_name}</span></p>
        <p>Answers: <Link
          to={{ pathname: `/post/${question_id}`, state: props.item }}
          className="link"
        >
          {answer_count}
        </Link>
        </p>
      </div>
      <p>Tags: {renderTags()}</p>
    </div>
  );
};

export default withRouter(connect(null, {
  fetchAddData,
})(ResultItem));
