import React from 'react'
import Styles from './item-empty-styles.scss'

const ItemEmpty: React.FC = () => {
  return (
    <>
      <li className={Styles.surveyItemEmpty}/>
      <li className={Styles.surveyItemEmpty}/>
      <li className={Styles.surveyItemEmpty}/>
      <li className={Styles.surveyItemEmpty}/>
    </>
  )
}

export default ItemEmpty
