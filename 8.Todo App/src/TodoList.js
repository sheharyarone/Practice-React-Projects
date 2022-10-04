import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm ';
import { v4 as uuid } from 'uuid';
import './TodoList.css'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update=this.update.bind(this);
        this.completed=this.completed.bind(this);
    }
    create(newTask) {
        const inputTask = { task: newTask, id: uuid(),isCompleted:false }
        this.setState({
            taskList: [...this.state.taskList, inputTask]
        });
    }
    remove(id) {
        this.setState({

            taskList: this.state.taskList.filter((eachTask) => eachTask.id !== id)
        })

    }

    update(id,updatedTask){
        const updatedtaskList=this.state.taskList.map((task)=>{
            if(id===task.id){
                return {...task,task: updatedTask}
            }
            return task;
    })

    this.setState({
        taskList : updatedtaskList
    })
    }
    completed(id){
        const updatedtaskList=this.state.taskList.map((task)=>{
            if(id===task.id){
                return {...task,isCompleted: !task.isCompleted}
            }
            return task;
    })
    
    this.setState({
        taskList : updatedtaskList
    })
    }
    render() {
        let tasksRendering = this.state.taskList.map((eachTask) =>
            <Todo
                key={eachTask.id}
                id={eachTask.id}
                isCompleted={eachTask.isCompleted}
                task={eachTask.task}
                remove={() => this.remove(eachTask.id)}
                updateTask={this.update}
                complete={this.completed}
            />);
        return (
            <div className='TodoList'>
                <h1>
                    Tdo List <span>A Simple React Todo List App</span>
                </h1>
                <NewTodoForm createTask={this.create} />
                <ul>{tasksRendering}</ul>
            </div>
        )
    }
}
export default TodoList;