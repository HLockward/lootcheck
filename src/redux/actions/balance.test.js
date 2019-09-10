import * as actionTypes from './actionTypes';
import * as actions from './balance';

describe(`balance's actions`, () =>{
    it('create an action to set the balance', () =>{
        const balance = 0;
        const action = {type: actionTypes.SET_BALANCE, balance}
        expect(actions.setBalance(balance)).toEqual(action);
    });
    
    it('create an action to deposit into the balance', () =>{
        const deposit = 10;
        const action = {type: actionTypes.DEPOSIT, deposit};
        expect(actions.deposit(deposit)).toEqual(action);
    });
    
    it('create an action to withdraw from the balance', () =>{
        const withdraw = 5;
        const action = {type: actionTypes.WITHDRAW, withdraw};
        expect(actions.withdraw(withdraw)).toEqual(action);
    });
});

