import React from 'react'

const ButtonGeneric = ({color, display, disabled, extra, size, text}) => (
  <button
    className={
      'button' + (color ? ' is-' + color : '') + (extra ? ' ' + extra : '')
    }
    disabled={disabled && disabled}
  >
    {text}
  </button>
)

export default ButtonGeneric
