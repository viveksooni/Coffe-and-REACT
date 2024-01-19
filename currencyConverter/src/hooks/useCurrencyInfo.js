import {useEffect,useState} from 'react';


function useCurrencyInfo(currency)
{
    const [ value , setValue] = useState({});
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/c1440267c7b295c683ad8818/latest/${currency}`)
    .then((res)=>{return res.json()})
    .then((res)=>setValue(res.conversion_rates))
 
    },[currency])

    
    return value;
}

export default useCurrencyInfo;