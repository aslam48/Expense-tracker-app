import React from 'react'

const Transation = ({text}) => {
    console.log(text)
  return (
    <>
        <li className='minus'>
            {text} <span>-$400</span> <button className='delate-btn'>X</button>
        </li>
    </>
  )
}

export default Transation