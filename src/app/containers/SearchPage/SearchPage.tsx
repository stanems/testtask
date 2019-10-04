import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../actions/actions'

import './style.css'

interface Props {
  fetchData: Function
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



export default connect(null, {
  fetchData: (request: string) => fetchData(request)
})(SearchPage)