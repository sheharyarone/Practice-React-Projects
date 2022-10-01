import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    render(){
        
    
        return(
            <div>
            {this.props.data}
            </div>
        )
    }

}
export default BoxList;