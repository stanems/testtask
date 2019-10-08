import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Answer as AnswerType } from '../../utils/types'

import './style.css'

interface Props {
  answer: AnswerType
}

const Answer = (props: Props) => {
  const { owner, body } = props.answer
  const { profile_image, display_name } = owner

  const answerBody = ReactHtmlParser(body)

  return (
    <div className='answer__container'>
      <div className='answer__profile'>
        <img src={profile_image} alt='avatar' className='answer__avatar' />
        <p className='answer__name'>{display_name}</p>
      </div>
      <div className='answer__bodyContainer'>
        {answerBody}
      </div>
    </div>
  )
}

export default Answer