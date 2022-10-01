import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm ';
import { v4 as uuid } from 'uuid';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }
    create(newTask) {
        const inputTask = { task: newTask, id: uuid() }
        this.setState({
            taskList: [...this.state.taskList, inputTask]
        });
    }
    remove(id) {
        console.log('CLicked');
        this.setState({

            taskList: this.state.taskList.filter((eachTask) => eachTask.id != id)
        })

    }
    render() {
        let tasksRendering = this.state.taskList.map((eachTask) =>
            <Todo
                key={eachTask.id}
                id={eachTask.id}
                task={eachTask.task}
                remove={() => this.remove(eachTask.id)}
            />);
        return (
            <div>
                <NewTodoForm createTask={this.create} />
                {tasksRendering}
            </div>
        )
    }
}
export default TodoList;