import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: 0,
        }
    }

    handleClick = () => {
        this.props.updateBeast(this.props.beast);
    }

    addToFavorites = () => {        
        this.setState({favorites: this.state.favorites + 1});
    }
  
    render() {
        return (
            <div>
                <Card style = {{ width: '32rem'}}>
                <Card.Img  onClick={this.handleClick} variant="top" src={this.props.beast.image_url} alt = {this.props.beast.description} />
                <Card.Body>
                        <Card.Title>{this.props.beast.title}</Card.Title>
                        <Card.Text>
                            {this.props.beast.description}<br></br><br></br>
                            Number of horns: {this.props.beast.horns}<br></br><br></br>
                            Keyword: {this.props.beast.keyword}<br></br><br></br>
                            💙: {this.state.favorites}<br></br><br></br>
                            <Button onClick={this.addToFavorites}>Favorite</Button><br></br>
                            <br></br>
                            
                        </Card.Text>
                </Card.Body>
                </Card>       
               
            </div>
        )

    }

}

export default HornedBeasts