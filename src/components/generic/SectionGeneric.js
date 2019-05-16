import React from 'react'
import HeroGeneric from './HeroGeneric'
import SectionTitle from '../generic/SectionTitle'

const SectionGeneric = ({contentOfBody, name}) => (
  <div id={name} className="section">
    <HeroGeneric
      content={
        <>
          <SectionTitle title={name} />
          <HeroGeneric type="body" content={contentOfBody} />
        </>
      }
    />
  </div>
)

export default SectionGeneric
