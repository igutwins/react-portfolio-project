import React, {Component} from 'react';
import { connect } from 'react-redux'
import { addTask } from '../actions/tasks'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class NewTask extends Component {
    
    state = {
        title: '',
        description: '',
        assignee: '',
        reviewer: '',
        status: '',
        user: ''
    }
    
    handleOnChange = event => {
        const { value, name } = event.target
        this.setState({
            [name]: value    
        });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const task = {...this.state};
        console.log(task)
        this.props.addTask(task);
        this.setState({
            title: '',
            description: '',
            assignee: '',
            reviewer: '',
            status: '',
            user: ''
        })
    }

    render(){
        return(
            <>
            <h1>New Task Form</h1>
            <Form onSubmit={this.handleOnSubmit}>
            {/* <form onSubmit={this.handleOnSubmit}> */}
                <Form.Group style={{"width": '30%', "margin":"auto"}}>
                    <Form.Label for="title">Task Title:</Form.Label>
                    <Form.Control 
                        name='title' 
                        type='text'
                        value={this.state.title}
                        onChange={this.handleOnChange}
                        /><br/>
                </Form.Group>
                <Form.Group style={{"width": '30%', "margin":"auto"}}>
                <Form.Label for="description">Task Description:</Form.Label>
                <Form.Control  
                    name='description' 
                    type='text'
                    value={this.state.description}
                    onChange={this.handleOnChange}
                
                />
                </Form.Group>
                <br/>
                <Form.Group style={{"width": '30%', "margin":"auto"}}>
                <Form.Label for="assignee">Assigned To:</Form.Label>
                <Form.Control 
                    name='assignee' 
                    type='text'
                    value={this.state.assignee}
                    onChange={this.handleOnChange}
                />
                </Form.Group>
                <br/>
                <Form.Group style={{"width": '30%', "margin":"auto"}}>
                <Form.Label for="reviewer">Reviewer:</Form.Label>
                <Form.Control 
                    name='reviewer' 
                    type='text'
                    value={this.state.reviewer}
                    onChange={this.handleOnChange}
                />
                </Form.Group>
                <br/>
                <Form.Group style={{"width": '30%', "margin":"auto"}}>
                <Form.Label for="status">Status:</Form.Label>
                <Form.Control as="select"
                    name='status' 
                    type='text'
                    value={this.state.status}
                    onChange={this.handleOnChange}
                >
                    <option>Backlog</option>
                    <option>In Progress</option>
                    <option>For Review</option>
                    <option>Done</option>
                </Form.Control>
                </Form.Group>

                <br/>
                <Form.Group style={{"width": '30%', "margin":"auto"}}>
                <Form.Label for="user">User:</Form.Label>
                <Form.Control 
                    name='user' 
                    type='text'
                    value={this.state.user}
                    onChange={this.handleOnChange}
                />
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">Submit</Button>
            {/* </form> */}
            </Form>
            </>
            )
    }
}

export default connect(null, { addTask })(NewTask)
