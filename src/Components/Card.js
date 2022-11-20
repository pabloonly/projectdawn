import React from 'react'
import rafiki from '../Asset/rafiki.png'
import cuate from '../Asset/cuate.png'
import amico from '../Asset/amico.png'
import { useState } from 'react'
import "../Styles/Card.css"

const Carder = () => {
  return (
    <div>
        <h4><b>Why do people get involved with Cryptocurrencies?</b></h4><br />
        
        <div className='nik'>
            <img src={rafiki} alt="" />
            <h5><b>Easy Mode of Payment</b></h5>
            <span>People can now easily send and recieve money from anywhere in the world to purchase goods and pay for services</span>
        </div><br />
        <div className='nik'>
            <img src={cuate} alt="" />
            <h5><b>Financial Freedom</b></h5>
            <span>Just like the internet, no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money</span>
        </div><br />
        <div className='nik'>
            <img src={amico} alt="" />
            <h5><b>Investment</b></h5>
            <span>The constant demand as made Cryptocurrencies a Digital Gold used for alternative store of wealth on long term investments</span>
        </div><br />
        
    </div>
    
  )
}
  
const Card = () => {
  const [state, setState] = useState(false)
  return (
    <div><button className='tet' onClick={()=> setState(!state)}>{state ? 'See less' : 'See more'}</button>{state && <Carder/>}</div>
  )
}

export default Card