import React, { Component } from 'react';
import { Loot } from './Loot';
import { shallow, mount } from 'enzyme';

describe('Loot', () =>{
    const mockFetchBitcoin = jest.fn();
    let props = {balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin};
    let loot = shallow(<Loot {...props} />);

    it('renders properly', () =>{
        expect(loot).toMatchSnapshot();
    });

    describe('when mounted', () =>{
        beforeEach(() =>{
           loot = mount(<Loot {...props} />);
        });

        it('dispatches the `fetchBitcoin()` method it receives from props', () => {
            expect(mockFetchBitcoin).toHaveBeenCalled();
        });
    });

});