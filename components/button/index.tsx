import * as React from 'react'
import * as classnames from 'classnames'
import './style'

function Button(props: any) {
  const { type, ...rest } = props
  return (
    <button {...rest}
      className={classnames({
      'siren-btn': true,
      'siren-btn-primary': type === 'primary',
      'siren-btn-dashed': type === 'dashed',
      'siren-btn-danger': type === 'danger',
    })}>{props.children}</button>
  );
}

export default Button;