import React, { useState } from 'react'


const TransationList = () => {
    // const [] = useState
  return (
    <>
      <h3>History</h3>  
      <ul  className='list'>
        <li className="minus">Cash <span>-$400</span> <button className='delate-btn'>X</button></li>
      </ul>
    </>
  )
}

export default TransationList