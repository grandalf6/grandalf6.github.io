import React from 'react'
import CardFooterItem from './CardFooterItem'

const CardFooter = ({link, repo}) => (
  <footer className="card-footer">
    {[
      {
        buttonLink: link,
        buttonName: 'DEMO',
      },
      {
        buttonLink: repo,
        buttonName: 'REPOSITORY',
      },
    ].map((item, index) => (
      <CardFooterItem key={index} data={item} />
    ))}
  </footer>
)

export default CardFooter
