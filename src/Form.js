import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import data from './data.json';
import { FormLabel } from 'react-bootstrap';
import FormRange from 'react-bootstrap/esm/FormRange';
import Card from 'react-bootstrap/Card';

let sliderNow = 0;

export default class Form1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

   

    handleChange = () => {
        sliderNow = document.getElementById("customRange1");
        
    }

    submitValue =(event) => {
        event.preventDefault();
        console.log(sliderNow.value);
    }

    render() {
        return (
            <div>
                <Card style={{ width: '32rem' }}>
                <Form>
                    
                    <Form.Group className="mb-3" controlId="range">
                        <Form.Label>How many horns?</Form.Label>
                        
                        <Form.Range onChange={this.handleChange} width="20rem" min="1" max="100" type="range" className="form-range" id="customRange1" />
                        <Form.Label>Horns: {sliderNow}</Form.Label>
                        
                    </Form.Group>
                    <Button onClick={this.submitValue}  variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Card>
            </div>
        )
    }
}