import React from 'react';
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="taskItem">
            <span style={{ textDecoration: this.props.task.completed?'line-through':'none' }}>{this.props.task.title}</span>
            <button id="taskDelete"
                    onClick= { () => this.props.onDelete(this.props.index) }>
                Delete
            </button>
            <button id="taskComplete" 
                    onClick= { () => this.props.onComplete(this.props.index) }>
                Complete
            </button>
        </div>
        )
    }
}

export default Todo;