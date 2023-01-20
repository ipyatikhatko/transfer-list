import React, { FC } from 'react'
import classes from './style.module.scss'

type TransferItemProps = {
  name: string;
  checked: boolean;
}

const TransferItem: FC<TransferItemProps> = ({ name, checked }) => {
  return (
    <label className={classes.item} htmlFor={name}>
      <input className={classes.check} type="checkbox" checked={checked} name={name} />
      <p className={classes.label}>{name}</p>
    </label>
  )
}

export default TransferItem