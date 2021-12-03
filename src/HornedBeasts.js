import { Component } from 'react';
// import Image from 'react-bootstrap/Image';
// import SelectedBeast from './SelectedBeast.js';
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
      
        }
    }

    openModal = () => {
        this.setState({ showModal: true })
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }



    handleClick = () => {
        this.props.updateBeast(this.props.beast);
        // click to add favorites
        this.setState({ favorites: this.state.favorites + 1 });
        this.openModal(); // opens the pop up
        //this.props.updateBeast(this.props.beast);
    }
  

    render() {
        return (
            <div>
                <Card style = {{ width: '32rem'}}>
                <Card.Img  onClick={this.handleClick} variant="top" src={this.props.beast.image_url} alt = {this.props.beast.description} />
                <Card.Body>
                        <Card.Title>{this.props.beast.title}</Card.Title>
                        <Card.Text>
                            {this.props.beast.description}
                            <p>Number of horns: {this.props.beast.horns}</p>
                            <p>Keyword: {this.props.beast.keyword}</p>
                            💙: {this.state.favorites}
                        </Card.Text>
                </Card.Body>
                </Card>       
               
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

{/* <SelectedBeast closeModal={this.closeModal} show={this.state.showModal} /> */}