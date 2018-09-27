import React from "react";

export class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            todoFilter: "All"
        };
    }

    //constructor'da bind etmek yerine bu şekilde de bind edilebilir.'
    doneTask = (taskId) => {
        this.props.doneTaskPropName(taskId);
    }

    removeTask = (taskId) => {
        this.props.removeTaskPropName(taskId);
    }

    todoListFilter = (parameter) => {
        this.setState({ todoFilter: parameter });

        const activeBtn = document.getElementById("filterBtn" + parameter);
        document.getElementById("filterBtnAll").classList.remove("active");
        document.getElementById("filterBtnActive").classList.remove("active");
        document.getElementById("filterBtnCompleted").classList.remove("active");
        activeBtn.classList.add("active");
    }

    render() {
        let items_left = 0;

        const items = this.props.myTasksPropName.map((item, index) => {

            if (item.status === "passive")
                items_left++;

            if (this.state.todoFilter === "All" ||
                (this.state.todoFilter === "Active" && item.status === "passive") ||
                (this.state.todoFilter === "Completed" && item.status === "active")) {

                return (
                    <li key={index} id={index} className={item.status}>
                        <span className="id">{index + 1}</span>
                        <span className="title">{item.text}</span>
                        <span className="type" onClick={() => this.doneTask(index)} />
                        <span className="delete" onClick={this.removeTask} />
                    </li>
                );
            }
        });

        return (
            <div>
                <div className="todo-list">
                    <ul>{items}</ul>
                </div>
                <div className="todo-filter">
                    <div className="left">
                        <span>{items_left} items left </span>
                    </div>
                    <div className="right" id="listChanger">
                        <ul>
                            <li className="active" id="filterBtnAll">
                                <span onClick={() => this.todoListFilter("All")}>All</span>
                            </li>
                            <li id="filterBtnActive">
                                <span onClick={() => this.todoListFilter("Active")}>Active</span>
                            </li>
                            <li id="filterBtnCompleted">
                                <span onClick={() => this.todoListFilter("Completed")}>Completed</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    //   componentWillMount() {
    //     console.log("componentWillMount çalıştı...");
    //   }

    //   componentDidMount() {
    //     console.log("componentDidMount çalıştı...");
    //   }

    //   componentWillUnmount() {
    //     console.log("componentWillUnmount çalıştı...");
    //   }
}
