import { Card } from '@/components/Card'
import Link from 'next/link'

import 'styles/cards.css'

const Cards = () => {
  const data = []
  let card = {
    title: 'Spring Reactive and Flyway',
    description:
      'This is very simply java spring boot app, available to test online. ' +
      ' You can test from swagger page if you wish',
    imgSrc: 'https://picsum.photos/300/200',
    imgAlt: 'Card Image',
    github: 'https://github.com/vsaravanan/spring-reactive-flyway',
    swagger: 'https://saravanjs.com:10101/swagger-ui/index.html',
    testpage: 'http://saravanjs.com:10100/api/v1/students',
  }
  data.push(card)

  return (
    <>
      <div className='container'>
        {data.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </>
  )
}

export default Cards
