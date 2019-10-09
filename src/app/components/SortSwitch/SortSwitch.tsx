import React from 'react';
import { connect } from 'react-redux';
import { SortVariation, OrderVariation, AppStore, RequestParams, TableTypes } from '../../utils/types';
import { setSortBy, setOrderBy, fetchData, fetchAddData } from '../../store/actions';

import './style.css';

interface Props {
  fromTable: string;
  requestParams: RequestParams;
  setSortBy: (value: string) => void;
  setOrderBy: (value: string) => void;
  fetchData: (request: string) => void;
  fetchAddData: (value: number | string, type: string) => void;
}

const SortSwitch: React.FC<Props> = (props) => {
  const { requestParams, setSortBy, setOrderBy, fetchData, fetchAddData, fromTable } = props;
  const { sortBy, orderBy, initialRequest, addTableParam } = requestParams;

  const handleSortBy = (e: any) => {
    setSortBy(e.target.value);
    if (fromTable === TableTypes.MAIN) {
      fetchData(initialRequest);
    }
    if (addTableParam) fetchAddData(addTableParam.value, addTableParam.type);
  };

  const handleOrderBy = (e: any) => {
    setOrderBy(e.target.value);
    if (fromTable === TableTypes.MAIN) {
      fetchData(initialRequest);
    }
    if (addTableParam) fetchAddData(addTableParam.value, addTableParam.type);
  };

  return (
    <form className="switcher__container">
      <div className="switcher__variantContainer">
        <p className="switcher__title">Sort by: </p>
        <select className="switcher__select" value={sortBy} onChange={handleSortBy}>
          <option value={SortVariation.ACTIVITY}>{SortVariation.ACTIVITY}</option>
          <option value={SortVariation.CREATION}>{SortVariation.CREATION}</option>
          <option value={SortVariation.VOTES}>{SortVariation.VOTES}</option>
        </select>
      </div>
      <div className="switcher__variantContainer">
        <p className="switcher__title">Order by: </p>
        <select className="switcher__select" value={orderBy} onChange={handleOrderBy}>
          <option value={OrderVariation.DESC}>{OrderVariation.DESC}</option>
          <option value={OrderVariation.ASC}>{OrderVariation.ASC}</option>
        </select>
      </div>
    </form>
  );
};

export default connect((state: AppStore) => ({
  requestParams: state.requestParams,
}), { setSortBy, setOrderBy, fetchData, fetchAddData })(SortSwitch);
