import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transation from './Transation';


const TransationList = () => {
   const transactions = useContext(GlobalContext);
  

  return (
    <>
      <h3>History</h3>  
      <ul className='list'>
            {[1,2,3].map(transaction =>{
                return (
                    <Transation key={transaction.id} {...transaction} />
                )
            })
            }
        </ul>
     
    </>
  )
}

export default TransationList