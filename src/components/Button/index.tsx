import clsx from 'clsx';
import React, { FC, HTMLAttributes, HTMLProps, ReactNode } from 'react'
import classes from './style.module.scss'

type ButtonColors = 'primary' | 'secondary'

type ButtonProps = {
  color?: ButtonColors;
  children: ReactNode
}

const Button: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { children, color } = props;
  return (
    <button 
      className={clsx(classes.btn, color && classes[color])} 
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;