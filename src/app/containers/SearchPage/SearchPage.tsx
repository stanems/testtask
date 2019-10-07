import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../store/actions'
import { History } from 'history';

import './style.css'

interface Props {
  fetchData: Function,
  history: History,
}

const SearchPage = (props: Props) => {
  const [value, setRequest] = useState('')

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

export default connect(null, {
  fetchData
})(SearchPage)