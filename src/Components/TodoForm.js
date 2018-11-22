import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux'
import { addTask } from '../Actions'

class TodoForm extends React.Component {

    addTask = (e) => {
        e.preventDefault();
        
        const inputElement = ReactDOM.findDOMNode(this.refs.todoInput);
        const inputValue = ReactDOM.findDOMNode(this.refs.todoInput).value;
        
        this.props.addTask(inputValue);

        inputElement.value = "";
    }

    render() {
        return (
            <div>
                <div className="todo type1">
                    <form className="input-wrapper" onSubmit={this.addTask}>
                        <input id="todoInput" ref="todoInput" type="text" className="add-todo" placeholder="Whats needs to be done?" autoComplete="off" />
                    </form>
                </div>
                <button type="button" className="add-btn" onClick={this.addTask} />
            </div>
        );
    }
}

export default connect()(TodoForm)
//export default 
//import TodoForm from "./Components/TodoForm"; şeklinde eklenir.

//export 
//import {TodoForm} from "./Components/TodoForm"; şeklinde eklenir.