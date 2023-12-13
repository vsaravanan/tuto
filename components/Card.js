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
      {title && (
        <div className='card-title'>
          <h1 className='card-title'>{title}</h1>
        </div>
      )}
      {description && (
        <div className='card-description'>
          {desc.map((e, i) => (
            <div key={i}>{e ? e : <br />} </div>
          ))}
        </div>
      )}

      {github && (
        <div className='alignleft-double'>
          <Link className='link' href={github} rel='noopener noreferrer' target='_blank'>
            github
          </Link>
        </div>
      )}
      {swagger && (
        <div className='alignleft-double'>
          <Link className='link' href={swagger} rel='noopener noreferrer' target='_blank'>
            swagger
          </Link>
        </div>
      )}

      <div className='alignleft'>
        {testpages &&
          testpages.map((page, i) => {
            const [url, urlpath] = Object.entries(page)[0]
            return (
              <div key={i} className='alignleft'>
                <Link
                  className='link'
                  key={i}
                  href={urlpath}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {url}
                </Link>
              </div>
            )
          })}
      </div>

      <div className='alignleft'>
        {coderun &&
          coderun.map((page, i) => {
            const [url, obj] = Object.entries(page)[0]

            obj.leafpage = obj.filePath

            return (
              <div key={i} className='alignleft'>
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
              </div>
            )
          })}
      </div>

      <div className='alignleft'>
        {/* sourcecodes */}
        {sourcecodes &&
          sourcecodes.map((page, i) => {
            const [url, urlpath] = Object.entries(page)[0]
            return (
              <div key={i} className='alignleft'>
                <Link key={i} className='link' href={'/sourcecode/' + encodeURIComponent(urlpath)}>
                  {url}
                </Link>
              </div>
            )
          })}
      </div>
      <div className='alignleft'>
        {videos &&
          videos.map((page, i) => {
            const [url, urlpath] = Object.entries(page)[0]
            return (
              <div key={i} className='alignleft'>
                <Link key={i} className='link ' href={'/video/' + encodeURIComponent(urlpath)}>
                  {url}
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}
