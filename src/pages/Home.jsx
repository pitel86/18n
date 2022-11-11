import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const Home = () => {
    const {t} = useContext(MyContext) 
  return (
    <div>{t('home')}</div>
  )
}

export default Home