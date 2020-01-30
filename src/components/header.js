import React from 'react';
import logo from '../logo.svg';
import Navbar from './navbar';

function Header() {
    return (
        <div className="Header">
            <header className="App-header d-flex">
                <div className="container">
                    <div className="App-header-inner">
                        {/*<img src={logo} className="App-logo" alt="logo" />*/}
                        <Navbar/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;