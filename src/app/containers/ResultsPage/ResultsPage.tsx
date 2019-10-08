import React from 'react'
import { connect } from 'react-redux'
import { AppStore, Question, TableTypes } from '../../utils/types'
import ResultsTable from '../../components/ResultsTable'
import { Switch, Route } from 'react-router'
import { ROUTES } from '../../utils/routes'

import './style.css'

interface Props {
  data: Question[] | null;
  addData: Question[] | null;
}

const ResultsPage = (props: Props) => {
  const { data, addData } = props

  const AddResultTable = () => addData && <ResultsTable data={addData} type={TableTypes.ADD} />

  return (
    <div className='results__container'>
      {data && <ResultsTable data={data} type={TableTypes.MAIN} />}
      <div className='results__preview'>
        <Switch>
          <Route path={ROUTES.AUTHOR_RESULTS} component={AddResultTable} />
          <Route path={ROUTES.TAG_RESULTS} component={AddResultTable} />
        </Switch>
      </div>
    </div>
  )
}

export default connect((state: AppStore) => ({
  data: state.mainResult.data,
  addData: state.addResult.data
}))(ResultsPage)