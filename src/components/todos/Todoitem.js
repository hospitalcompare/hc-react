import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component {
    getStyle = () => {
        return {
            background: '#f7f7f7',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    render() {
        const { id, title, completed } = this.props.todo; // Destructuring - this allows us to use id, title instead of eg this.props.todo.id
        return (
            <div className="d-flex align-items-center w-100 border-bottom pl-2" >
                <input id={`check_${id}`} type="checkbox" checked={completed} onChange={this.props.toggleComplete.bind(this, id)} />
                <label style={this.getStyle()} htmlFor={`check_${id}`} className="ml-2 pl-2 w-100 mb-0 py-2" >{ title }</label>
                <button onClick={this.props.delTodo.bind(this, id)}>X</button>
            </div>
        )
    }

}

// PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default Todoitem;