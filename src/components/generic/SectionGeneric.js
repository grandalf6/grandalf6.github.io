import ArrowDown from '../generic/ArrowDown'
import HeroGeneric from './HeroGeneric'
import React from 'react'
import SectionTitle from '../generic/SectionTitle'

const SectionGeneric = ({
  colorOfTitle,
  colorOfBackground,
  contentOfBody,
  contentOfFooter,
  name,
}) => (
  <div
    style={{backgroundColor: colorOfBackground && colorOfBackground}}
    id={name}
    className="section"
  >
    <HeroGeneric
      content={
        <>
          {name !== 'Header' && (
            <SectionTitle color={colorOfTitle} title={name} />
          )}
          <HeroGeneric type="body" content={contentOfBody} />
          <HeroGeneric type="foot" content={contentOfFooter} />
        </>
      }
    />
  </div>
)

export default SectionGeneric
