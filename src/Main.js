import { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';

// This was done with help from Michael Metcalf in Remo.


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {            
          
        }
    }
    
    render() {
        return (
            <>
                {this.props.data.map((beast, i) => <HornedBeasts 
                key={i}
                index={i}
                updateBeast={this.props.updateBeast}
                beast={beast}
                />)}
            </>
        )
    }
}
export default Main