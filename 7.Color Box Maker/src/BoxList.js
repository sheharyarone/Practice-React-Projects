import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    boxList=this.props.boxList;
    render(){
        return(
            <div>
                {this.boxList.maps(box=>box)}
            </div>
        )
    }

}
export default BoxList;