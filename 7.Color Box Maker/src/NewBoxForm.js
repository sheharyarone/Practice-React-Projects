import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import BoxList from './BoxList';

class NewBoxForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        boxList: [],
        color: '',
        height: '',
        width: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleRender=this.handleRender.bind(this);
}
handleChange(evt) {
    this.setState({
        [evt.target.name]: evt.target.value
    })
}
handleSumbit(evt) {
    evt.preventDefault();
    <Box key={uuid()} color={this.state.color} width={this.state.width} height={this.state.height}/>
    this.setState({
        boxList:[...this.state.boxList,<Box key={uuid()} color={this.state.color} width={this.state.width} height={this.state.height}/>],
        color: '',
        width: '',
        height: ''
    });
    // <BoxList data={this.state.boxList}/>
}
handleRender(){
    for(let i=0;i<this.state.boxList.length;i++){
        <div>
            {this.state.boxList[i]}
        </div>
    }
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
    {this.handleRender}
    </div>
    )
}

}

export default NewBoxForm;