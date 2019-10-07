import React from 'react'
import { connect } from 'react-redux'
import { Data, AddDataTypes } from '../../utils/types'
import { Link } from 'react-router-dom'
import { fetchAddData } from '../../store/actions'
import { ROUTES } from '../../utils/routes'

import './style.css'

interface Props {
  item: Data;
  fetchAddData: Function;
}

const ResultItem = (props: Props) => {
  const { title, owner, answer_count, tags } = props.item
  const { display_name, user_id } = owner

  const handleClickOnAuthor = () => props.fetchAddData(user_id, AddDataTypes.AUTHOR)
  const handleClickOnTag = (tagName: string) => props.fetchAddData(tagName, AddDataTypes.TAG)

  const renderTags = () => tags.map((tag) => <Link to={ROUTES.TAG_RESULTS} className='link' onClick={() => handleClickOnTag(tag)}>{`${tag} `}</Link>)

  return (
    <div className='resultItem__container'>
      <p className='resultItem__title'>{title}</p>
      <div className='resultItem__authorAndAndswers'>
        <p>Author: <Link to={ROUTES.AUTHOR_RESULTS} className='link' onClick={handleClickOnAuthor}>{display_name}</Link> </p>
        <p>Answers: {answer_count}</p>
      </div>
      <p>Tags: {renderTags()}</p>
    </div>
  )
}

export default connect(null, {
  fetchAddData
})(ResultItem)