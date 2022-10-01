import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
            height: '',
            width: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSumbit(evt) {
        evt.preventDefault();
        const box={...this.state,id:uuid()};
        this.props.create(box);
        this.setState({
            color: '',
            width: '',
            height: ''
        });

    }
    render() {

        return (
            <div>
                <form onSubmit={this.handleSumbit}>
                    <label htmlFor="color">COLOR</label>
                    <input id='color' type="text" name='color' value={this.state.color} onChange={this.handleChange} />

                    <label htmlFor="height">HEIGHT</label>
                    <input id='height' name='height' type="qty" value={this.state.height} onChange={this.handleChange} />

                    <label htmlFor="width">WIDTH</label>
                    <input id='width' name='width' type="qty" value={this.state.width} onChange={this.handleChange} />

                    <button>SUMBIT</button>
                </form>
            </div>
        )
    }

}

export default NewBoxForm;