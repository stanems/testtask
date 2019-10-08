import React from 'react'
import { connect } from 'react-redux'
import { Question, AddDataTypes } from '../../utils/types'
import { Link } from 'react-router-dom'
import { fetchAddData, fetchPost } from '../../store/actions'
import { ROUTES } from '../../utils/routes'

import './style.css'

interface Props {
  item: Question;
  fetchAddData: Function;
  fetchPost: Function;
}

const ResultItem = (props: Props) => {
  const { title, owner, answer_count, tags } = props.item
  const { display_name, user_id } = owner

  const handleClickOnAuthor = () => props.fetchAddData(user_id, AddDataTypes.AUTHOR)
  const handleClickOnTag = (tagName: string) => props.fetchAddData(tagName, AddDataTypes.TAG)
  const handleClickOnTitleOrAnswerCount = () => props.fetchPost(props.item)

  const renderTags = () => tags.map((tag) => <Link to={ROUTES.TAG_RESULTS} className='link' onClick={() => handleClickOnTag(tag)}>{`${tag} `}</Link>)

  return (
    <div className='resultItem__container'>
      <p className='resultItem__title'><Link to={ROUTES.POST} className='link' onClick={handleClickOnTitleOrAnswerCount}>{title}</Link></p>
      <div className='resultItem__authorAndAndswers'>
        <p>Author: <Link to={ROUTES.AUTHOR_RESULTS} className='link' onClick={handleClickOnAuthor}>{display_name}</Link> </p>
        <p>Answers: <Link to={ROUTES.POST} className='link' onClick={handleClickOnTitleOrAnswerCount}>{answer_count}</Link></p>
      </div>
      <p>Tags: {renderTags()}</p>
    </div>
  )
}

export default connect(null, {
  fetchAddData,
  fetchPost,
})(ResultItem)