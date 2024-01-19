import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index.js';
function App() {
  const [amount,setAmount] = useState(0);
  const [to,setTo] = useState("INR");
  const [from,setFrom] = useState("USD");
  const [ convertedAmount,setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);
    
  const option = Object.keys(currencyInfo);
    console.log(option)
  const swap = ()=>{
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const convert = ()=>{
    setConvertedAmount(from*option[to]);
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/5831511/pexels-photo-5831511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount = {convertedAmount}
                            currencyOptions = {option}
                            onCurrencyChange={(currency)=>setTo(currency)
                            }
                            selectCurr = {from}
                            onAmountChange={(amount)=>setAmount(amount)}
                             
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount = {amount}
                            currencyOptions = {option}
                            onCurrencyChange={(currency)=>setAmount(amount)
                            }
                            selectCurr = {from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
