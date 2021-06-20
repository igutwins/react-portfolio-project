import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class Task extends Component {
    render(){
        return(
            <Card className="task">
                <Card.Header>Card Text</Card.Header>
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>Text</Card.Text>
                </Card.Body>
                
            </Card>
            
            )
    }
}

export default Task