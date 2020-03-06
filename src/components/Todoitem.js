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
        const { id, title } = this.props.todo; // Destructuring - this allows us to use id, title instead of eg this.props.todo.id
        return (
            <div className="d-flex align-items-center w-100 border-bottom pl-2" style={this.getStyle()}>
                <input id={`check_${id}`} type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                <label for={`check_${id}`} className="ml-2 w-100" >{ title }</label>
            </div>
        )
    }

}

// PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default Todoitem;