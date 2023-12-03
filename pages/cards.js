import { Card } from '@/components/Card'

import 'styles/cards.css'
import data from 'db/data'

const Cards = () => {
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
