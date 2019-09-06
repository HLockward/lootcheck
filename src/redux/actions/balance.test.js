import * as actionTypes from './actionTypes';
import * as actions from './balance';

it('create an action to set the balance', () =>{
    const balance = 0;
    const action = {type: actionTypes.SET_BALANCE, balance}
    expect(actions.setBalance(balance)).toEqual(action);
});