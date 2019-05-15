import React from 'react'

const TitleGeneric = ({
  size,
  align,
  bold,
  color,
  text,
  type,
  transformation,
}) => (
  <div
    className={
      (align && 'has-text-' + align) +
      ' ' +
      (bold && 'has-text-weight-' + bold) +
      ' ' +
      (color ? 'has-text-' + color : 'has-text-dark') +
      ' ' +
      (size && 'is-' + size) +
      ' ' +
      (transformation && 'is-' + transformation) +
      ' ' +
      type
    }
  >
    {text}
  </div>
)

export default TitleGeneric
