import React from 'react'
import CardImg from './CardImg'
import CardContent from './CardContent'

const Card = () => {
  return (
    <section className='bg-white p-4 rounded-lg space-y-4 max-w-[350px]'>
        <CardImg/>
        <CardContent/>
    </section>
  )
}

export default Card