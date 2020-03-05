import React from 'react';
import Todos from './Todos';

function Main() {

    return (
        <div className="Main">
            <main className="App-main py-5">
                <div className="container">
                    <Todos/>
                </div>
            </main>
        </div>
    );
}

export default Main;