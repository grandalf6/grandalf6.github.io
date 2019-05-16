import React from 'react'
import CardContent from './CardContent'
import CardFooter from './CardFooter'
import IconForProject from './IconForProject'
import ScreenshootForProject from './ScreenshootForProject'
import ScrollAnimation from 'react-animate-on-scroll'

const SingleProject = ({
  data: {description, file, link, name, repo, stack},
}) => {
  return (
    <div className="tile is-5 is-parent">
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <div className="tile is-child">
          <div className="card">
            <ScreenshootForProject file={file} />
            <CardContent description={description} name={name} />
            <div />
            <CardFooter link={link} repo={repo} />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

{
  /*WHAT HAS TO BE INCLUDED
  icons of stack
  screentshow
  description
  */
}

export default SingleProject
