import React from 'react'
import {useID} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) {
    const id = useID;
  return (
    <div className={` bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1-2'>
          <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
          <input 
          type="text" 
          placeholder='Amount'
          className='outline-none w-full bg-transparent py-1.5'
          disabled = {amountDisabled}
          value={amount}
          id={id}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'> 
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select 
        name="" 
        id=""
        className='rounded-lg px-1 py-1 bg-grey-100 cursor-pointer outline-none'
        value={selectedCurrency}
        onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
        disabled={currencyDisabled}>
            {currencyOptions.map((currency)=> (
                <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>
        </div>
    </div>
  )
}

export default InputBox