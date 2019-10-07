import React from 'react'

import './style.css'
import { Data } from '../../utils/types'
import ResultItem from '../ResultItem/ResultItem'

interface Props {
	data: Data[]
}

const ResultsTable = (props: Props) => {
	const { data } = props

	return (
		<div className='resultsTable__container'>
			{data && data.map(item => <ResultItem item={item} />)}
		</div>
	)
}

export default ResultsTable
