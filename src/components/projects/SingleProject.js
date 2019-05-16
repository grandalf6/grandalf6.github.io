import React from 'react'
import CardContent from './CardContent'
import CardFooter from './CardFooter'
import ScreenshootForProject from './ScreenshootForProject'

const SingleProject = ({data: {description, file, link, name, repo}}) => (
  <div className="tile is-6 is-parent">
    <div className="tile is-child">
      <div className="card">
        <ScreenshootForProject file={file} />
        <CardContent description={description} name={name} />
        <CardFooter link={link} repo={repo} />
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
