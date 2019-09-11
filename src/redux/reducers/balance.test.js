import * as actionTypes from '../actions/actionTypes';
import balanceReducer from './balance';
import balanceReducer2 from './balance';

describe('balanceReducer', ()=> {
    
    describe('when initializing', () =>{
        const balance = 10;

        it('set a balance', () =>{
            const action = {type: actionTypes.SET_BALANCE, balance};
            expect(balanceReducer(undefined, action)).toEqual(balance);
        });
    
        describe('the re-initializing', () =>{
            it('reads the balance from cookies', () =>{
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
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