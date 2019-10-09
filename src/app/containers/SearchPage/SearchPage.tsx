import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AppStore } from '../../utils/types';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import './style.css';

interface Props {
  initialRequest: string;
}

const SearchPage: React.FC<Props & RouteComponentProps> = (props) => {
  const { initialRequest } = props;

  const [value, setRequest] = useState(initialRequest);

  const handleValue = (event: any) => setRequest(event.target.value);

  const handleOnKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      props.history.push(`/posts/${event.target.value}`);
    }
  };

  return (
    <div className="container">
      <h1 className="header">StackOverflow Search</h1>
      <input
        className="input"
        placeholder="Search..."
        onChange={handleValue}
        onKeyDown={handleOnKeyDown}
      />
      <Link to={`/posts/${value}`} >
        <button className="button" >Search</button>
      </Link>
    </div >
  );
};

export default withRouter(connect((state: AppStore) => ({
  initialRequest: state.requestParams.initialRequest,
}))(SearchPage));
