import React from 'react'

import './style.css'
import { Question } from '../../utils/types'
import ResultItem from '../ResultItem'
import SortSwitch from '../SortSwitch'

interface Props {
  data: Question[];
  type: string
}

const ResultsTable = (props: Props) => {
  const { data, type } = props

  return (
    <div className='resultsTable__container'>
      <SortSwitch fromTable={type} />
      {data && data.map(item => <ResultItem item={item} />)}
    </div>
  )
}

export default ResultsTable
