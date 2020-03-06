import React from 'react';
import AddTodo from "../todos/AddTodo";

const Header = () => {
   const headerStyle = {
       background: '#037098',
       color: '#fff'
   };

    return (
        <header style={headerStyle} className="py-3">
            <div className="container">
                Todolist
            </div>
        </header>
    );
};

export default Header;