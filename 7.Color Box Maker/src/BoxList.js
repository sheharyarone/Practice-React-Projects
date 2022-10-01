import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
        this.createBox = this.createBox.bind(this);
    }
    createBox(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }
    remove(id){
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
          });
    }
    render() {
        let renderBox = this.state.boxes.map(box =>
            <Box
                key={box.id}
                id={box.id}
                width={box.width}
                height={box.width}
                color={box.color}
                removeBox={()=>this.remove(box.id)}
            />

        );
        return (
            <div>
                <NewBoxForm create={this.createBox} />
                {renderBox}
            </div>
        )
    }

}
export default BoxList;