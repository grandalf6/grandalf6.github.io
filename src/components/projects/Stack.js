import React from 'react'
import IconForProject from './IconForProject'

const Stack = ({stack}) => (
  <div className="stack">
    {stack.map((icon, index) => (
      <IconForProject key={index} icon={icon} />
    ))}
  </div>
)

export default Stack
