import React, { Component } from 'react';
import './Todo.css'
class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            task : this.props.task,
            isEditing : false
        }
        this.toggleEdit=this.toggleEdit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleCompletion=this.handleCompletion.bind(this);
    }
    toggleEdit(){
        this.setState({isEditing:  !this.state.isEditing} )
    }
    handleChange(evt){
        this.setState({
            task: evt.target.value
        })
    }
    handleUpdate(evt){
        evt.preventDefault();

        this.props.updateTask(this.props.id,this.state.task)
        this.toggleEdit();
    }
    handleCompletion(){
        this.props.complete(this.props.id);
    }
    render(){
        if (!this.state.isEditing){   //isEditing : FALSE
        return(
            <div>
                <p 
                onClick={this.handleCompletion}
                className={this.props.isCompleted ? 'Completed' : ''}
                >
                    {this.props.task}
                </p>
                <button onClick={this.props.remove}>Delete</button>
                <button onClick={this.toggleEdit}>Edit</button>
            
            </div>
        )}

        else{
            return(
            <div>
                <form onSubmit={this.handleUpdate}>
                    <input id='task' type='text' onChange={this.handleChange} value={this.state.task} />
                    <button>Sumbit</button>
                </form>

            </div>

        )}
}

}
export default Todo;