import React from 'react';
import Todo from '../components/Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {
                    id: 1,
                    title: "Finish application.",
                    completed: false
                },
                {
                    id: 2,
                    title: "Buy groceries.",
                    completed: false
                },
                {
                    id: 3,
                    title: "Walk the dog.",
                    completed: false
                }
            ],
            id: 3
        };
    }

    handleComplete = (taskIndex) => {
        var tasks = this.state.tasks.slice();
        tasks[taskIndex].completed = true;
        this.setState({tasks: tasks});
    }

    handleDelete = (taskIndex) => {
        var tasks = this.state.tasks.slice();
        tasks.splice(taskIndex);
        this.setState({tasks: tasks});
    }

    addTask = () => {
        var tasks = this.state.tasks;
        var id = this.state.id + 1;
        var inp = document.querySelector(".newTaskInput")
        tasks.push({
            id: id,
            title: inp.value,
            completed: false
        });
        inp.value = "";
        this.setState({tasks: tasks, id: id});
    }

    render() {
        return (
            <div className="taskList"> 
            {
                this.state.tasks.map(
                    (task, index) => 
                    <Todo key={task.id}
                        index={index} 
                        task={task} 
                        onComplete={this.handleComplete}
                        onDelete={this.handleDelete}>
                    </Todo>
                )
            } 
            <input type="text" placeholder="New task" className="newTaskInput"></input>
            <button id="newTask" onClick={this.addTask}>+</button>
            </div>
        )
    }
}

export default TodoList;