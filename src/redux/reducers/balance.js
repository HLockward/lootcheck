import * as actionTypes from '../actions/actionTypes';
import {read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balance = (state = 0, action) =>{
    let balance;
    switch(action.type){
        case actionTypes.SET_BALANCE:
            balance = action.balance;
            break;
        case actionTypes.DEPOSIT:
            balance = state + action.deposit;
            break;
        case actionTypes.WITHDRAW:
            balance = state - action.withdraw;
            break;    
        default:
            balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;    
    }
    bake_cookie(BALANCE_COOKIE, balance);
    
    return balance;
}

export default balance;