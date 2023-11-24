import React, { useState } from 'react'
import './Card.css'
import Link from 'next/link'

export const Card = ({ card }) => {
  const { title, imgSrc, imgAlt, description, github, swagger, testpages } = card
  const [isHovered, setIsHovered] = useState(false)
  const desc = description.split('\n')

  return (
    <div
      className={`card-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imgSrc && imgAlt && <img className='card-img' src={imgSrc} alt={imgAlt} />}
      {title && <h1 className='card-title'>{title}</h1>}
      {description && (
        <div className='card-description'>
          {desc.map((e, i) => (
            <div key={i}>{e}</div>
          ))}
        </div>
      )}

      <Link className='link' href={github} rel='noopener noreferrer' target='_blank'>
        github
      </Link>
      <Link className='link' href={swagger} rel='noopener noreferrer' target='_blank'>
        swagger
      </Link>
      {testpages.map((page, i) => {
        const [url, urlpath] = Object.entries(page)[0]
        return (
          <Link className='link' key={i} href={urlpath} rel='noopener noreferrer' target='_blank'>
            {url}
          </Link>
        )
      })}
    </div>
  )
}
