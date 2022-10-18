import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class VendingMachine extends Component {
    render() {
        return (
            <div>
                <Link exact to="/soda">Soda</Link>
                <Link exact to="/sardines">Sardines</Link>
                <Link exact to="/chips">Chips</Link>


                <img src="https://images.unsplash.com/photo-1618506557292-ec1862b3c506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVuZGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&w=1000&q=80" alt='VENDING MACHINE'  />
                <h2>hello i am the vending machnine what would you like to have ? </h2>
            </div>
        )
    }
}

export default VendingMachine;