import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm ';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            taskList : []
        }
        this.create=this.create.bind(this);   
    }
    create(newTask){
        this.setState({
            taskList : [...this.state.taskList,newTask]
        });
    }
    render(){
        let tasksRendering = this.state.taskList.map((task)=><Todo task={task}/>);
        return(
            <div>
                <NewTodoForm createTask={this.create}/>
                {tasksRendering}
            </div>
        )
    }
}
export default TodoList;