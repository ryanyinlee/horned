import { Component } from 'react';
// import Image from 'react-bootstrap/Image';
import SelectedBeast from './SelectedBeast.js';
import Card from 'react-bootstrap/Card';
// import Figure from 'react-bootstrap/Figure';
// import FigureImage from 'react-bootstrap/FigureImage';
// import FigureCaption from 'react-bootstrap/FigureCaption';


class HornedBeasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: 0,
            showModal: false,
            title: '',
            image_url: '',
            key: ''
        }
    }

    openModal = () => {
        this.setState({ showModal: true })
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    returnImage = () => {
        this.setState({    })
    }

    handleClick = () => {
        // click to add favorites
        this.setState({ favorites: this.state.favorites + 1 });
        this.openModal(); // opens the pop up
        this.setState({ title: this.state.title});
        this.setState({ image: this.state.image_url});
        this.props.updateBeast(this.props.beast);
    }
  

    render() {
        return (
            <div>
                <Card style = {{ width: '18rem'}}>
                <Card.Img  onClick={this.handleClick} variant="top" src={this.props.imageUrl} alt = {this.props.description} />
                <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                            <p>Number of horns: {this.props.horns}</p>
                            <p>Keyword: {this.props.keyword}</p>
                            💙: {this.state.favorites}
                        </Card.Text>
                </Card.Body>
                </Card>
           
                <SelectedBeast closeModal={this.closeModal} show={this.state.showModal} />
            </div>
        )

    }

}

export default HornedBeasts

{/* <h2>{this.props.name}</h2>
<Image onClick={this.handleClick} src={this.props.imageUrl} alt={this.props.description} title={this.props.name} key={this.props.keyword} fluid roundedCircle />
<p>Description: {this.props.description}</p>
<p>Number of horns: {this.props.horns}</p>
<p>Keyword: {this.props.keyword}</p>
💙: {this.state.favorites} */}