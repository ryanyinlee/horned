import { Component } from 'react';
import Image from 'react-bootstrap/Image';
import data from './data.json';
// import PopUp from './PopUp.js';
// import Figure from 'react-bootstrap/Figure';
// import FigureImage from 'react-bootstrap/FigureImage';
// import FigureCaption from 'react-bootstrap/FigureCaption';


class InThePopUp extends Component {

    constructor(props) {
        super(props);
        this.state = {            
          key: ''
        }
    }

        
    render() {
        return (
            <div>
                <h2>{data.title} data.title</h2>
                <Image  src={data.image_url} fluid rounded />
                InThePopUp is working.
                                
                
            </div>
        )
    }
}

export default InThePopUp