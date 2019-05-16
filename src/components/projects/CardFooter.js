import React from 'react'
import CardFooterItem from './CardFooterItem'

const CardFooter = ({link, repo}) => (
  <footer class="card-footer">
    {[
      {
        buttonLink: link,
        buttonName: 'DEMO',
      },
      {
        buttonLink: repo,
        buttonName: 'REPOSITORY',
      },
    ].map((item) => (
      <CardFooterItem data={item} />
    ))}
  </footer>
)

export default CardFooter
