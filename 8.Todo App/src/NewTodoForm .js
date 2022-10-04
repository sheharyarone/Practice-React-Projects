import React, { Component } from 'react';
import './NewTodoForm.css';
class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state={
            taskState : ''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSumbit=this.handleSumbit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            taskState: evt.target.value
        })
    }
    handleSumbit(evt){
        evt.preventDefault();
        this.props.createTask(this.state.taskState);
        this.setState({
            taskState : ''
        })
    }
    
    render(){
        return(
            <div >
                <form 
                onSubmit={this.handleSumbit}
                className='NewTodoForm'
                >
                <label htmlFor="task">New Task</label>
                    <input  id='task' type="text" name='new Task' value={this.state.taskState} onChange={this.handleChange} />
                <button >Sumbit</button>
                </form>
            </div>
        )
    }

}
export default NewTodoForm;
