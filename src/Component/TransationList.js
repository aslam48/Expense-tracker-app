import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transation'



const TransationList = () => {
   const {transactions} = useContext(GlobalContext);
  

  return (
    <>
      <h3>History</h3>  
      <ul className='list'>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
        </ul>
     
    </>
  )
}

export default TransationList