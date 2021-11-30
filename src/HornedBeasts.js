import { Component } from 'react';

class HornedBeasts extends Component {
    render() {
        return (
        <div>
        <h2>{this.props.name}</h2>
        <img src={this.props.imageUrl} alt={this.props.description} title={this.props.name}></img> 
        <p>Description: {this.props.description}</p>

        </div>
        )
        
}
}

export default HornedBeasts