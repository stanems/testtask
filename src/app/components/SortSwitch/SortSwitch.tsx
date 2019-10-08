import React from 'react'

import './style.css'
import { SortVariation, OrderVariation } from '../../utils/types'

const SortSwitch = () => {

  return (
    <div className='switcher__container'>
      <div className='switcher__variantContainer'>
        <p className='switcher__title'>Sort by: </p>
        <select className='switcher__select'>
          <option value={SortVariation.ACTIVITY}>{SortVariation.ACTIVITY}</option>
          <option value={SortVariation.CREATION}>{SortVariation.CREATION}</option>
          <option selected value={SortVariation.VOTES}>{SortVariation.VOTES}</option>
        </select>
      </div>
      <div className='switcher__variantContainer'>
        <p className='switcher__title'>Order by: </p>
        <select className='switcher__select'>
          <option selected value={OrderVariation.DESC}>{OrderVariation.DESC}</option>
          <option value={OrderVariation.ASC}>{OrderVariation.ASC}</option>
        </select>
      </div>
    </div>
  )
}

export default SortSwitch