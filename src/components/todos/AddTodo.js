import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: '',
        completed: false
    };

    onChange = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    };

    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.onSubmit} className="d-flex w-100 mb-2">
                        <input className="pl-2 w-100"
                               id="enter_todo"
                               type="text"
                               placeholder="Enter your todo item"
                               value={this.state.title}
                               onChange={this.onChange}/>
                        <input type="submit"
                               value="submit" />
                    </form>
                </div>
            </div>
        );
    }
}

AddTodo.propTypes = {};

export default AddTodo;