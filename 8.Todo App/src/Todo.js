import React, { Component } from 'react';
import './Todo.css'
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task,
            isEditing: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCompletion = this.handleCompletion.bind(this);
    }
    toggleEdit() {
        this.setState({ isEditing: !this.state.isEditing })
    }
    handleChange(evt) {
        this.setState({
            task: evt.target.value
        })
    }
    handleUpdate(evt) {
        evt.preventDefault();

        this.props.updateTask(this.props.id, this.state.task)
        this.toggleEdit();
    }
    handleCompletion() {
        this.props.complete(this.props.id);
    }
    render() {
        if (!this.state.isEditing) {   //isEditing : FALSE
            return (
                <div className='Todo'>
                    <li

                        onClick={this.handleCompletion}
                        className={this.props.isCompleted ? 'Todo-task completed' : 'Todo-task'}
                    >
                        {this.props.task}
                    </li>
                    <div className='Todo-buttons'>
                        <button onClick={this.props.remove}>
                            <i className='fas fa-trash' />
                        </button>
                        <button onClick={this.toggleEdit}>
                            <i className='fas fa-pen' />
                        </button>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className='Todo'>
                    <form className='Todo-edit-form'
                    onSubmit={this.handleUpdate}
                    >
                        <input name='task'
                            type='text'
                            onChange={this.handleChange}
                            value={this.state.task}

                        />
                        <button>Save</button>
                    </form>

                </div>

            )
        }
    }

}
export default Todo;