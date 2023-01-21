import React, { FC } from 'react'
import classes from './style.module.scss'

type TransferItemProps = {
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const TransferItem: FC<TransferItemProps> = ({ name, checked, onChange }) => {
  return (
    <label className={classes.item} htmlFor={name}>
      <input 
        id={name}
        onChange={(e) => onChange(e.currentTarget.checked)} 
        className={classes.checkbox} 
        type="checkbox" 
        checked={checked} name={name} 
      />
      <p className={classes.label}>{name}</p>
    </label>
  )
}

export default TransferItem