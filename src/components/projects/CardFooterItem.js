import React from 'react'

const CardFooterItem = ({data: {buttonLink, buttonName}}) => (
  <a
    href={buttonLink}
    class="card-footer-item has-text-weight-bold"
    target="_blank"
  >
    {buttonName}
  </a>
)

export default CardFooterItem
