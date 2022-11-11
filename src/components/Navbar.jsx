import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const {t, changeLanguaje} =useContext(MyContext);
  return (
    <nav>
        <NavLink to={''}>{t('home')}</NavLink>
        <NavLink to={'characters'}>{t('characters')}</NavLink>
        <NavLink to={'houses'}>{t('houses')}</NavLink>
        <button onClick={()=>changeLanguaje('es')}>{t('btn_es')}</button>
        <button onClick={()=>changeLanguaje('en')}>{t('btn_en')}</button>
        <button onClick={()=>changeLanguaje('fr')}>{t('btn_fr')}</button>
    </nav>
  )
}

export default Navbar