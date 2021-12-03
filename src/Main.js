import { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';
import data from './data.json';

// This was done with help from Michael Metcalf in Remo.


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {            
          
        }
    }
    
    render() {
        return (
            <div>
                {this.props.data.map((beast, i) => <HornedBeasts 
                key={i}
                index={i}
                updateBeast={this.props.updateBeast}
                beast={beast}
                />)}
            </div>
        )
    }
}
export default Main