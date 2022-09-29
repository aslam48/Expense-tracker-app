import React from 'react'

const Transation = ({transaction}) => {
    
  return (
    <>
        <li className='minus'>
            {transaction.text} <span>-$400</span> <button className='delate-btn'>X</button>
        </li>
    </>
  )
}

export default Transation