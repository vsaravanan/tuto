import React, { useState } from 'react'
import './Card.css'
import Link from 'next/link'

export const Card = ({ card }) => {
  const {
    title,
    imgSrc,
    imgAlt,
    description,
    github,
    swagger,
    testpages,
    coderun,
    sourcecodes,
    videos,
  } = card
  const [isHovered, setIsHovered] = useState(false)
  const desc = description?.split('\n')
  // let serverPath = ''

  // if (typeof window !== 'undefined') {
  //   serverPath = window.origin
  // }

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
            <div key={i}>{e ? e : <br />} </div>
          ))}
        </div>
      )}

      {github && (
        <Link className='link' href={github} rel='noopener noreferrer' target='_blank'>
          github
        </Link>
      )}
      {swagger && (
        <Link className='link' href={swagger} rel='noopener noreferrer' target='_blank'>
          swagger
        </Link>
      )}

      {coderun &&
        coderun.map((page, i) => {
          const [url, obj] = Object.entries(page)[0]

          obj.leafpage = obj.filePath

          return (
            <Link
              className='link'
              key={i}
              href={{
                pathname: '/codility/coderun',
                query: obj,
              }}
            >
              {url}
            </Link>
          )
        })}

      {testpages &&
        testpages.map((page, i) => {
          const [url, urlpath] = Object.entries(page)[0]
          return (
            <Link className='link' key={i} href={urlpath} rel='noopener noreferrer' target='_blank'>
              {url}
            </Link>
          )
        })}

      {/* sourcecodes */}
      {sourcecodes &&
        sourcecodes.map((page, i) => {
          const [url, urlpath] = Object.entries(page)[0]
          return (
            <Link key={i} className='link' href={'/sourcecode/' + encodeURIComponent(urlpath)}>
              {url}
            </Link>
          )
        })}
      {videos &&
        videos.map((page, i) => {
          const [url, urlpath] = Object.entries(page)[0]
          return (
            <Link key={i} className='link' href={'/video/' + encodeURIComponent(urlpath)}>
              {url}
            </Link>
          )
        })}
    </div>
  )
}
