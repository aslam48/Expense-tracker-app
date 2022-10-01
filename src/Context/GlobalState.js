import React, {createContext, useReducer} from 'react'
import Transation from '../Component/Transation';
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
<<<<<<< HEAD
            transactions:state.transactions,deleateTransation,AddTransation
=======
            transactions:state.transactions,deleateTransation,addTransation
>>>>>>> c8a4b3dce281435b63230e7cc0e4df119df723cc
        }}>
            {children}
        </GlobalContext.Provider>
    )
}