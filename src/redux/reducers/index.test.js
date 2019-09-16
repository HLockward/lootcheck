import rootReducer from './index';

describe('rootReducer', () =>{
    it('initialize the defaul state', () =>{
        expect(rootReducer({}, {})).toEqual({balance: 0, bitcoin : {}});
    });
});