import { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';
import data from './data.json';


// This was done with help from Michael Metcalf in Remo.

class Main extends Component {

    render() {
        return (
            <div>
                {
                    data.map(horned => {
                        return (<HornedBeasts name={horned.title} imageUrl={horned.image_url} description={horned.description} keyword={horned.keyword} horns={horned.horns} />)
                    })
                }
            </div>
        )
    }
}
export default Main