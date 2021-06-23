import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { updateStatus } from '../actions/tasks'

class Task extends Component {

    state = {
        status: "",
        id: this.props.id
    }

    handleOnChange = event => {
        const { value, name } = event.target
        this.setState({
            ...this.state,
            [name]: value    
        });
    }
    
    handleOnSubmit = event => {
        event.preventDefault();
        const task = {...this.state};
        this.props.updateStatus(task);
        this.setState({
            status: "",
            id: ""
        })
    }
    
    
    render(){
        return(
            <Card className="task">
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Body>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>Assigned to: {this.props.assignee}</Card.Text>
                    <Card.Text>Reviewer: {this.props.reviewer}</Card.Text>
                    <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group style={{"width": '60%', "margin":"auto", "display":"inline-block"}}>
                        <Form.Label for="status">Update Status:</Form.Label>
                        <Form.Control as="select"
                            size='sm'
                            name='status' 
                            type='text'
                            value={this.state.status}
                            onChange={this.handleOnChange}
                            >   <option>Select:</option>
                                <option>Backlog</option>
                                <option>In Progress</option>
                                <option>For Review</option>
                                <option>Done</option>
                    </Form.Control>
                    </Form.Group>
                    <Button variant="outline-primary" size="sm" type="submit">Submit</Button>                    </Form>
                </Card.Body>
                
            </Card>
            
            )
    }
}
export default connect(null, {updateStatus})(Task)