import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


export default class SelectedBeast extends Component {

  constructor(props) {
    super(props);
    this.state = {
            
    }
}

   render() {
        return (
      
      <Modal show={this.props.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beastToShow.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card >
            <Card.Img src={this.props.beastToShow.image_url} alt={this.props.beastToShow.description} />
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    )
  }

}


