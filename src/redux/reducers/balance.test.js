import * as actionTypes from '../actions/actionTypes';
import balanceReducer from './balance';

describe('balanceReducer', ()=> {
    it('set a balance', () =>{
        const balance = 10;
        const action = {type: actionTypes.SET_BALANCE, balance};
        expect(balanceReducer(undefined, action)).toEqual(balance);
    });
});