import React from 'react'

import './style.css'
import { Question } from '../../utils/types'
import ResultItem from '../ResultItem'
import SortSwitch from '../SortSwitch'

interface Props {
  data: Question[]
}

const ResultsTable = (props: Props) => {
  const { data } = props

  return (
    <div className='resultsTable__container'>
      <SortSwitch />
      {data && data.map(item => <ResultItem item={item} />)}
    </div>
  )
}

export default ResultsTable
