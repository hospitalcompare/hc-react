import React, {Component, useState} from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Do something',
                completed: false
            },
            {
                id: 2,
                title: 'Go for a run',
                completed: false
            },
            {
                id: 3,
                title: 'Clean the house',
                completed: false
            }
        ]
    };

    render() {
        return (
            <div>
                <Header/>
                <main>
                    <div className="container">
                        <Todos todos={this.state.todos}/>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
