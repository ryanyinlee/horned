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
                {
                    data.map(horned => {
                        return (<HornedBeasts name={horned.title} imageUrl={horned.image_url} description={horned.description} key={horned.keyword} horns={horned.horns} updateBeast={horned.updateBeast}/>)
                    }
                    )
                }
            </div>
        )
    }
}
export default Main