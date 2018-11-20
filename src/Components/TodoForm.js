import React from "react";

export class TodoForm extends React.Component {

    constructor() {
        super();

        //this.addTask = this.addTask.bind(this);
    }

    addTask = (e) => {
        e.preventDefault();
        const inputElement = document.getElementById("todoInput");
        const inputValue = inputElement.value;
        this.props.addTask(inputValue);
        inputElement.value = "";
    }

    render() {
        return (
            <div>
                <div className="todo type1">
                    <form className="input-wrapper" onSubmit={this.addTask}>
                        <input id="todoInput" type="text" className="add-todo" placeholder="Whats needs to be done?" autoComplete="off" />
                    </form>
                </div>
                <button type="button" className="add-btn" onClick={this.addTask} />
            </div>
        );
    }
}
