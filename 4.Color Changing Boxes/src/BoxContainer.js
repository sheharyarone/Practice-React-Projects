import React, { Component } from 'react' ;

import './BoxContainer.css';
import Box from './Box';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes : 18,
        allColors : ['green','purple','cyan','orange','magenta','skyblue','pink','white','gray']
    }
    render(){
        const boxes = Array.from({length : this.props.numBoxes}).map(()=>(
            <Box allColors={this.props.allColors}/>
        ))

        return(
            <div className='BoxContainer'>
                {boxes}
            </div>
        )
    }

}
export default BoxContainer;