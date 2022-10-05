const reducer = (state, action) => {
    switch(action.type){
        case "DELEATE_TRANSACTION":
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
            case "ADD_TRANSATION":
                return{
                    ...state,
                    transactions: [action.payload, ...state.transactions]
                }
                  
        default:
            return state;
    }
}

export default reducer;