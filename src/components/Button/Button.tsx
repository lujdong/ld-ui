import React, { CSSProperties, FC, MouseEventHandler } from 'react'
import { tuple } from '../utils/type'
import classnames from 'classnames'

import './style/index.less'
import { SizeType } from '../config-provider/SizeContext'

const ButtonTypes = tuple('default', 'primary', 'danger', 'link', 'success', 'warning')
export type ButtonType = typeof ButtonTypes[number]

const ButtonHtmlTypes = tuple('button', 'submit', 'reset')
export type ButtonHtmlType = typeof ButtonHtmlTypes[number]

export interface NativeButtonProps {
  htmlType?: ButtonHtmlType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface BaseButtonProps {
  /**
   * @description 大小
   */
  size?: SizeType;
  /**
   * @description 类型
   */
  type?: ButtonType;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义 style
   */
  style?: CSSProperties;
}

export type ButtonProps = NativeButtonProps & BaseButtonProps

const Button: FC<ButtonProps> = ({
  size,
  className,
  children,
  style,
  type,
  htmlType,
  onClick
}) => {

  const classes = classnames(
    'ld-btn',
    className,
    {
      [`ld-btn-${size}`]: size,
      [`ld-btn-${type}`]: type,
    }
  )

  return (
    <button
      className={classes}
      style={style}
      type={htmlType}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  )
}
export default Button
