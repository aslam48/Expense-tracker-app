import React from 'react'

const Transation = ({transaction}) => {
  const sign = transaction.amount < 0 ? "-" : "+";
    
  return (
    <>
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span> <button className='delate-btn'>X</button>
        </li>
    </>
  )
}

export default Transation