import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../store/actions'
import { AppStore } from '../../utils/types'
import { History } from 'history';

import './style.css'

interface Props {
  loading: boolean,
  fetchData: Function,
  history: History,
}

const SearchPage = (props: Props) => {
  const [value, setRequest] = useState('')

  const handleValue = (event: any) => setRequest(event.target.value)
  const handleClick = () => props.fetchData(value)

  return (
    <div className='container'>
      <header className='header'>StackOverflow Search</header>
      <textarea className='textarea' placeholder="Search..." onChange={handleValue} />
      <button className='button' onClick={handleClick}>Search</button>
    </div>
  )
}

export default connect((state: AppStore) => ({
  loading: state.loading
}), {
  fetchData
})(SearchPage)