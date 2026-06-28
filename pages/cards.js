import { Card } from '@/components/Card'

import 'styles/cards.css'
import carddata from '@/db/carddata'

const Cards = () => {
  return (
    <>
      <div className='container'>
        {carddata.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </>
  )
}

export default Cards
