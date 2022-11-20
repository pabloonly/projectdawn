import React from 'react'
import applestore from '../Asset/Group 68@2xAppleStore.png'
import playstore from '../Asset/Group 69AndroidStore.png'
// import eclipse from '../Asset/Group127.png'
import "../Styles/Home.css"

const Home = () => {
  return (
    <div className ='general'>     
     {/* <div className='kik' id='kik'>
          <img src={eclipse} alt="" />
        </div> */}
        <br /><h2><b>Buy, Sell and manage your <br /> Crypto on TradExpress.</b></h2><br />
        <p>Easily Trade Crptocurrencies like BTC, USDT, <br /> ETH, LTC & XRP with NGN</p>
        <button className='jingle'>Get started</button><br />
        <div id='loks' className='imant'>
        <img src={applestore} alt="" />
        <img src={playstore} alt="" />
        </div>
       
    </div>
  )
}

export default Home