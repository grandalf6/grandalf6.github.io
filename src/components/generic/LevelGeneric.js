import React from 'react'

const LevelGeneric = ({content, mobile}) => (
  <div className={'level' + ' ' + (mobile && 'is-mobile')}>{content}</div>
)

export default LevelGeneric
