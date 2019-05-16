import React from 'react'

const SectionGeneric = ({content, name}) => (
  <div id={name} className="section">
    {content}
  </div>
)

export default SectionGeneric
