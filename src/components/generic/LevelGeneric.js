import React from 'react'

const LevelGeneric = ({content, item, mobile}) => (
  <div
    className={(item ? 'level-item' : 'level') + ' ' + (mobile && 'is-mobile')}
  >
    {content}
  </div>
)

export default LevelGeneric
