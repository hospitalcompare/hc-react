import React, {Component} from 'react';
import AddTodo from "../todos/AddTodo";
import Todos from "../todos/Todos";
import {v4 as uuidv4} from "uuid";

class Home extends Component {
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
            id: uuidv4(),
            title: title,
            completed: false
        };

        this.setState({todos: [...this.state.todos, newTodo]})
    };

    render(){
        return (
            <div>
                <AddTodo addTodo={this.addTodo}/>
                <div className="container">
                    <Todos todos={this.state.todos}
                           toggleComplete={this.toggleComplete}
                           delTodo={this.delTodo}/>
                </div>
            </div>
        );
    }
};

export default Home;