import React from 'react';
import _ from 'lodash';
import ResultItem from '../ResultItem';
import SortSwitch from '../SortSwitch';
import { Question } from '../../utils/types';

import './style.css';

interface Props {
  data: Question[] | null;
  type: string;
}

const ResultsTable: React.FC<Props> = (props) => {
  const { data, type } = props;

  return (
    <div className="resultsTable__container">
      <SortSwitch fromTable={type} />
      {data && _.map(data, (item: Question) => <ResultItem item={item} key={item.question_id} />)}
    </div>
  );
};

export default ResultsTable;
