import style from './ThemeButton.module.css'
import React from 'react'

export const ThemeButton = ({onClick}) =>{
    return(
       <div className={style.buttonPosition}>
         <button onClick={onClick} className={style.theme__icon }>
  <span></span>
  <span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </span>
  <span></span>
</button>
       </div>
    )
}