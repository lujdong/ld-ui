import React, { FC } from 'react'
import { tuple } from '../utils/type'
import classnames from 'classnames'

import './style/index.less'
import { SizeType } from '../config-provider/SizeContext'

const ButtonTypes = tuple('default', 'primary', 'danger', 'link', 'success', 'warning')
export type ButtonType = typeof ButtonTypes[number]

const ButtonHtmlTypes = tuple('button', 'submit', 'reset')
export type ButtonHtmlType = typeof ButtonHtmlTypes[number]

export interface ButtonProps {
  /**
   * @description 大小
   */
  size?: SizeType;
}

const Button: FC<ButtonProps> = ({ size }) => {

  const classes = classnames(
    'ld-btn',
    {
      [`ld-btn-${size}`]: size
    }
  )

  return (
    <button className={classes}>
      <span>button</span>
    </button>
  )
}
export default Button
