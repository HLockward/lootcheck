import * as actionTypes from '../actions/actionTypes';
import balanceReducer from './balance';

describe('balanceReducer', ()=> {
    it('set a balance', () =>{
        const balance = 10;
        const action = {type: actionTypes.SET_BALANCE, balance};
        expect(balanceReducer(undefined, action)).toEqual(balance);
    });

    it('deposit in the balance', () =>{
        const state = 0;
        const deposit = 10;
        const action = {type: actionTypes.DEPOSIT, deposit};
        expect(balanceReducer(state, action)).toEqual(state + deposit);
    });

    it('withdraw from the balance', () =>{
        const state = 10;
        const withdraw = 10;
        const action = {type: actionTypes.WITHDRAW, withdraw};
        expect(balanceReducer(state, action)).toEqual(state - withdraw);
    });
});