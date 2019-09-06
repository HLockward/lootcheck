import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers/balance';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

describe('Wallet', () =>{
    const wallet = shallow(<Provider store={store}><Wallet /></Provider>);
    it('should render correctly', () =>{
        expect(wallet).toMatchSnapshot();
    })

});