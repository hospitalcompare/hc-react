import React from 'react';
import AddTodo from "../todos/AddTodo";
import Navbar from "./Navbar";

const Header = () => {
   const headerStyle = {
       background: '#037098',
       color: '#fff'
   };

    return (
        <header style={headerStyle} className="py-3">
            <div className="container">
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;