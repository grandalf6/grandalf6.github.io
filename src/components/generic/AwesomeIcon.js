import React from 'react'

const AwesomeIcon = ({color, icon, size, align}) => (
  <i
    className={
      (size && 'is-size-' + size) +
      ' ' +
      (color && 'has-text-' + color) +
      ' ' +
      icon +
      ' ' +
      (align && 'has-text-' + align)
    }
  />
)

export default AwesomeIcon
