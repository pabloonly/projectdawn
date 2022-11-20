import React from 'react'
import '../Styles/Review.css'
import ireti from '../Asset/ireti.png'
import bayo from '../Asset/bayo.png'
import goke from '../Asset/olagoke.png'

const Review = () => {
  return (
    <div>
        <h4><b>Customer's Review</b></h4><br />
        <img className='win' src={ireti} alt="" /><br /><br />
        <img className='win' src={bayo} alt="" /><br /><br />
        <img className='win' src={goke} alt="" />
    </div>
  )
}

export default Review