import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div className="Header">
            <header className="App-header d-flex bg-light navbar-light">
                <div className="container">
                    <div className="App-header-inner">
                        <Navbar/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;