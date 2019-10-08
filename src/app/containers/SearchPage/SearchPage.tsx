import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../store/actions'
import { History } from 'history';

import './style.css'
import { AppStore } from '../../utils/types';

interface Props {
  initialRequest: string;
  fetchData: Function,
  history: History,
}

const SearchPage = (props: Props) => {
  const { initialRequest } = props

  const [value, setRequest] = useState(initialRequest)

  const handleValue = (event: any) => setRequest(event.target.value)
  const handleClick = () => props.fetchData(value)

  return (
    <div className='container'>
      <h1 className='header'>StackOverflow Search</h1>
      <textarea className='textarea' placeholder="Search..." onChange={handleValue} />
      <button className='button' onClick={handleClick}>Search</button>
    </div>
  )
}

export default connect((state: AppStore) => ({
  initialRequest: state.requestParams.initialRequest
}), {
  fetchData
})(SearchPage)