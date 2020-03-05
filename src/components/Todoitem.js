import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component {
    render() {
        return (
            <div className="d-flex align-items-center w-100 border-bottom">
                <input type="checkbox"/>
                <p className="mb-0 ml-2">{this.props.todo.title}</p>
            </div>
        );
    }
}

Todoitem.propTypes = {};

export default Todoitem;