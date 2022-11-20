import React, {useEffect,useState} from 'react'
import '../Styles/Render.css'
import groupt from '../Asset/groupt.png'
import groupts from '../Asset/groupts.png'


const Render = () => {
    const [value, setValue] = useState(0)
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
 
    useEffect(()=>{
        setTimeout(()=>{

            fetch('https://api.coinlore.net/api/tickers/?start=0&limit=6')
              .then((res) => res.json())
              .then((rep) => setData(rep.data) ,setIsLoading(false))
        },8000)

    })
    if(isLoading){
        return(
            <div>
                <p className='loading'>Loading, please wait...</p>
            </div>
        )
    }
  return (
    <div>
        <div className='rendernew'>
            {data.map((datum)=>{
                const {id,name,symbol,price_usd,percent_change_24h} = datum
                return(
                    <div id='datums' key={id}>
                        <p className='names'>{name}</p>
                        <p className='symbol'>{symbol}</p> 
                        <p className='price-usd'>${price_usd} ${percent_change_24h} <img src={percent_change_24h > 0 ? groupts : groupt} alt="" /></p> <hr /> 

                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Render