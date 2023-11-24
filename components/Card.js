import React, { useState } from 'react'
import './Card.css'
import Link from 'next/link'

export const Card = ({ card }) => {
  const { title, imgSrc, imgAlt, description, github, swagger, testpage } = card
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
        <p className='card-description'>
          <table>
            {desc.map(e => (
              <tr>{e}</tr>
            ))}
          </table>
        </p>
      )}

      <Link className='link' href={github} rel='noopener noreferrer' target='_blank'>
        github
      </Link>
      <Link className='link' href={swagger} rel='noopener noreferrer' target='_blank'>
        swagger
      </Link>
      <Link className='link' href={testpage} rel='noopener noreferrer' target='_blank'>
        testpage
      </Link>
    </div>
  )
}
