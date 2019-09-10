import * as actionTypes from '../actions/actionTypes';

const balance = (state = 0, action) =>{
    switch(action.type){
        case actionTypes.SET_BALANCE:
            return action.balance;
        case actionTypes.DEPOSIT:
            return state + action.deposit;
        case actionTypes.WITHDRAW:
            return state - action.withdraw;    
        default:
            return state;    
    }
}

export default balance;