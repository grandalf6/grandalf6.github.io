import React from 'react'

const TextGeneric = ({size, bold, color, align, level, text}) => (
  <span
    className={
      (size && 'is-size-' + size) +
      ' ' +
      (color && 'has-text-' + color) +
      ' ' +
      (level && 'level-item') +
      ' ' +
      (bold && 'has-text-weight-' + bold) +
      ' ' +
      (align && 'has-text-' + align)
    }
  >
    {text}
  </span>
)

export default TextGeneric
