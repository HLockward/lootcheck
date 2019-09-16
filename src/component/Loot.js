import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../redux/actions/bitcoin'

export class Loot extends Component{
    componentDidMount() {
        this.props.fetchBitcoin();
    }

    render(){
        return(
            <h3>bitcoin</h3>
        );
    };
}

export default connect(state => state, { fetchBitcoin })(Loot);