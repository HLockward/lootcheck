import React from 'react';
import { useSelector } from 'react-redux';

const Wallet = () =>{
    const balance = useSelector(state => state.balance);
    return(
        <h3>Your balance is:{balance}</h3>
    );
}

export default Wallet;