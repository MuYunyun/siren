import * as React from 'react'
import * as classnames from 'classnames'
import './style/index.scss'

function Button(props: any) {
  const { type, ...rest } = props
  return (
    <button className={classnames({
      ...rest,
      'siren-btn': true,
      'siren-btn-primary': type === 'primary',
      'siren-btn-dashed': type === 'dashed',
      'siren-btn-danger': type === 'danger',
    })}>{props.children}</button>
  );
}

export default Button;