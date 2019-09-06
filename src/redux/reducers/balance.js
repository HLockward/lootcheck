import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/balance';

const balance = (state = 0, action) =>{
    switch(action.type){
        case actionTypes.SET_BALANCE:
            return action.balance;
        default:
            return balance;    
    }
}

export default balance;