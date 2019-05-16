import React from 'react'
import LevelGeneric from '../generic/LevelGeneric'
import ScreenshootForProject from './ScreenshootForProject'

const SingleProject = () => (
  <div>
    <LevelGeneric
      content={
        <>
          <LevelGeneric
            item={true}
            content={<div> neineeienieieineieneinineineineineinenie</div>}
          />
          <LevelGeneric item={true} content={<ScreenshootForProject />} />
        </>
      }
    />
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
