import React from 'react'
import cuates from '../Asset/cuate2.png'
import deposit from '../Asset/depositgirl.png'
import sellgirl from '../Asset/sellgirl.png'
import vector from '../Asset/Vector.png'
import vector2 from '../Asset/Vector2.png'
import vector3 from '../Asset/Vector3.png'
import "../Styles/Next.css"

const Next = () => {
  return (
    <div className='okay'>
        <h4><b>Buy and Sell your Cryptocurrency in 3 simple steps</b></h4><br /><br />
        <div className='yiy'>
            
            <h5 className='ill'><b> <img id='ilt' src={vector} alt="" />Create a free Account</b></h5>
            <span>Sign up for your free TradExpress Wallet on web, IOS, or android devices and follow our easy process to set up your profile.</span>
            <img id='pop' src={cuates} alt="" />
        </div><br /><br />
        <div className='hih'>
            <img id='pop' src={deposit} alt="" />
            
            <h5 className='irt'><b><img src={vector2} alt="" /> Deposit</b></h5>
            <span>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for east funding/withdrawal.</span>
        </div><br /><br /><br />
        <div className='jij'>
       
            <h5 className='ipt'><b>   <img src={vector3} alt="" /> Buy/Sell Crypto</b></h5>
            <span>Buy BTC,USDT,ETH,LTC,XRP,DOGE and security store it in your wallet or send it easily to friends and family</span>
            <img id='pop' src={sellgirl} alt="" />
        </div>
    </div>
  )
}

export default Next