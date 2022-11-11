import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const Houses = () => {
    
    const {t} = useContext(MyContext) 
  return (
    <div>{t('houses')}</div>
  )
}

export default Houses