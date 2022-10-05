import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//ininitial state
const ininitialState = {
    transactions: []
}


//Create context 
export const GlobalContext =  createContext(ininitialState);


//provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, ininitialState )


    //function

    function deleateTransation(id){
        dispatch({
            type: "DELEATE_TRANSACTION",
            payload: id
        })
    }

    function addTransation(transaction){
        dispatch({
            type:"ADD_TRANSATION",

            payload:transaction

        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,deleateTransation, addTransation
        }}>
            {children}
        </GlobalContext.Provider>
    )
}