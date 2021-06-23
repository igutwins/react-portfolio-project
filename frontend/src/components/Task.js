import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class Task extends Component {
    render(){
        return(
            <Card className="task">
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Body>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>Assigned to: {this.props.assignee}</Card.Text>
                    <Card.Text>Reviewer: {this.props.reviewer}</Card.Text>
                </Card.Body>
                
            </Card>
            
            )
    }
}
export default Task