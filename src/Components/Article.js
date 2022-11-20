import React from 'react'
import applestore from '../Asset/apstores.png'
import playstore from '../Asset/Groupandroids.png'
import "../Styles/Article.css"

const Article = () => {
  return (
    <div>
        <h4>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</h4>
        <h4><b>Create your account for free and start trading today!</b></h4>
        <button id='get'>Get started</button>
        <div className='store'>
        <img src={applestore} alt="" />
        <img src={playstore} alt="" />
        </div>
    </div>
  )
}

export default Article