import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const Characters = () => {
    
    const {t} = useContext(MyContext) 
  return (
    <div>{t('characters')}</div>
  )
}

export default Characters