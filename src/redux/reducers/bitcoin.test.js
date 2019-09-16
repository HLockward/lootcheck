import bitcoinReducer from './bitcoin';
import { FETCH_BITCOIN } from '../actions/actionTypes';

describe('bitcoinReducer', () =>{
    const bitcoinData = {bpi: 'bitcoint price index'};

    it('fetches and sets the bitcoin data', () =>{
        const action = {type: FETCH_BITCOIN, bitcoin: bitcoinData};
        expect(bitcoinReducer({},action)).toEqual(bitcoinData);
    })
});