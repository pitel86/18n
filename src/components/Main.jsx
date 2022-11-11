import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const Main = () => {
    const {t} = useContext(MyContext)
  return (
    <div>
        {t('text_main')}
    </div>
  )
}

export default Main