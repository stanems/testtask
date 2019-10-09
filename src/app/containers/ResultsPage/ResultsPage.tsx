import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { AppStore, Question, TableTypes } from '../../utils/types';
import ResultsTable from '../../components/ResultsTable';
import { RouteComponentProps, withRouter } from 'react-router';
import { fetchData } from '../../store/actions';

import './style.css';

type RouteParams = {
  value: string;
};

type Props = RouteComponentProps<RouteParams> & {
  data: Question[] | null;
  addData: Question[] | null;
  fetchData: (value: string) => void;
};

const ResultsPage: React.FC<Props> = (props) => {
  const { data, addData, fetchData } = props;
  const { value } = props.match.params;

  useEffect(() => fetchData(value), [fetchData, value]);

  return (
    <div className="results__container">
      {data && <ResultsTable data={data} type={TableTypes.MAIN} />}
      <div className="results__preview">
        {!!_.size(addData) && <ResultsTable data={addData} type={TableTypes.ADD} />}
      </div>
    </div>
  );
};

export default withRouter(connect((state: AppStore) => ({
  data: state.mainResult.data,
  addData: state.addResult.data,
}), {
  fetchData,
})(ResultsPage));
