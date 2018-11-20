import React, { Component } from "react";
import { Header } from "./Components/Header";
import { TodoForm } from "./Components/TodoForm";
import { TodoList } from "./Components/TodoList";
import { Footer } from "./Components/Footer";

class App extends Component {

    constructor() {
        super();

        this.state = {
            myTasks: [{ text: "Ders Çalış", status: "passive" }],
            myList: ["sertunc", "miray"]
        };

        //this.addTask = this.addTask.bind(this);
        //this.doneTask = this.doneTask.bind(this);
        //this.removeTask = this.removeTask.bind(this);
    }

    addTask = (taskItem) => {
        let updatedList = this.state.myTasks;
        updatedList.push({ text: taskItem, status: "passive" });
        this.setState({ myTasks: updatedList });
    }

    doneTask = (taskId) => {
        let updatedList = this.state.myTasks;

        let newStatus = "";
        let currentStatus = updatedList[taskId].status;
        if (currentStatus === "active")
            newStatus = "passive"
        else
            newStatus = "active"

        updatedList[taskId].status = newStatus;

        this.setState({ myTasks: updatedList });
    }

    removeTask = (taskId) => {
        let updatedList = this.state.myTasks;
        updatedList.splice(taskId, 1);

        this.setState({ myTasks: updatedList });
    }

    render() {
        return (
            <div className="content">
                <Header />
                <TodoForm addTask={this.addTask} />
                <TodoList
                    myTasks={this.state.myTasks}
                    doneTask={this.doneTask}
                    removeTask={this.removeTask} />
                <Footer />
            </div>
        );
    }
}

export default App;
