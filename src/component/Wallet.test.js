import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () =>{
    const props = {balance : 0};
    const wallet = shallow(<Wallet {...props}/>);
    it('should render correctly', () =>{
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from store', () =>{
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 0');
    });

});