import React from 'react'
import CardContent from './CardContent'
import ScreenshootForProject from './ScreenshootForProject'

const SingleProject = ({data: {file, name}}) => (
  <div class="tile is-6 is-parent">
    <div class="tile is-child">
      <div class="card">
        <ScreenshootForProject file={file} />
        <CardContent name={name} />
      </div>
    </div>
  </div>
)

{
  /*WHAT HAS TO BE INCLUDED
  icons of stack
  screentshow
  description
  */
}

export default SingleProject
