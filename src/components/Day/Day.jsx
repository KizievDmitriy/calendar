import React from 'react'
import s from './day.module.scss';
export default function Day({day, rowIdx}) {
  return (
    <div className={s.container}>
      <div>
        {rowIdx === 0 && (<p className={s.day}>{day.format('ddd')}</p>)}
        <p className={s.number}>{day.format('DD')}</p>
      </div>    
    </div>
  )
}
