import React from 'react'

const AwesomeIcon = ({color, colorOut, icon, size, align}) => (
  <i
    style={{color: colorOut}}
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
