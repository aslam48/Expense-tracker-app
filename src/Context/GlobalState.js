import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//ininitial state
const ininitialState = {
    transactions: [
        {id: 1, text: "Flower", amount: -20},
        {id: 2, text: "Salary", amount: +300},
        {id: 3, text: "Book", amount: -10},
        {id: 4, text: "Camera", amount: +150}
       ]
}


//Create context 
export const GlobalContext = createContext(ininitialState);


//provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, ininitialState)


    //function

    function deleateTransation(id){
        dispatch({
            type: "DELEATE_TRANSACTION",
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,deleateTransation
          
        }}>
            {children}
        </GlobalContext.Provider>
    )
}