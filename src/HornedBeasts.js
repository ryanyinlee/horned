import { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';


class HornedBeasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        }
    }

    handleClick = () => {
        // click to add favorites

        this.setState({ favorites: this.state.favorites + 1 });


    }

    render() {

        return (
            <div>
                
                    <h2>{this.props.name}</h2>
                    <Image onClick={this.handleClick} id='hornedImage' src={this.props.imageUrl} alt={this.props.description} title={this.props.name} fluid rounded />
                    
                        <p>Description: {this.props.description}</p>
                        <p>Number of horns: {this.props.horns}</p>
                        <p>Keyword: {this.props.keyword}</p>
                        💙: {this.state.favorites}
                    
                
            </div>
        )

    }

}


export default HornedBeasts