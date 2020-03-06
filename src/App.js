import React, {Component, useState} from 'react';
import Header from './components/header';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Do something',
                completed: true
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

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    };

    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
    };

    render() {
        return (
            <div>
                <Header/>
                <main>
                    <div className="container">
                        <Todos todos={this.state.todos}
                               toggleComplete={this.toggleComplete}
                               delTodo={this.delTodo}/>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
