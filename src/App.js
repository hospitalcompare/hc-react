import React, {Component, useState} from 'react';
import Header from './components/layout/Header';
import Todos from './components/todos/Todos';
import './App.css';
import AddTodo from "./components/todos/AddTodo";

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

    componentDidMount() {
        console.log('No of items', this.state.todos.length);
    }

    // Toggle the 'completed' property
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

    // Delete the todo
    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
    };

    // Add a new todo
    addTodo = (title) => {
        // console.log(title)
        const newTodo = {
            id: 4,
            title: title,
            completed: false
        };

        this.setState({ todos: [...this.state.todos, newTodo]} )
    };

    render() {
        return (
            <div>
                <Header/>
                <AddTodo addTodo={this.addTodo}/>
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
