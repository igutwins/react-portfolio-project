import React, {Component} from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux'
import { addTask } from '../actions/tasks'

class NewTask extends Component {
    
    state = {
        title: '',
        description: '',
        assignee: '',
        reviewer: '',
        status: '',
    }
    
    handleOnChange = event => {
        const { value, name } = event.target
        this.setState({
            [name]: value    
        });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const task = {...this.state, id: uuid()};
        this.props.addTask(task);
        this.setState({
            title: '',
            description: '',
            assignee: '',
            reviewer: '',
            status: '',
        })
    }

    render(){
        return(
            <>
            <h1>New Task Form</h1>
            <form onSubmit={this.handleOnSubmit}>
                <input 
                    name='title' 
                    type='text'
                    value={this.state.title}
                    onChange={this.handleOnChange}
                />
                <input 
                    name='description' 
                    type='text'
                    value={this.state.description}
                    onChange={this.handleOnChange}
                />
                <input 
                    name='assignee' 
                    type='text'
                    value={this.state.assignee}
                    onChange={this.handleOnChange}
                />
                <input 
                    name='reviewer' 
                    type='text'
                    value={this.state.reviewer}
                    onChange={this.handleOnChange}
                />
                <input 
                    name='status' 
                    type='text'
                    value={this.state.status}
                    onChange={this.handleOnChange}
                />
                <input type="submit"></input>
            </form>
            </>
            )
    }
}

export default connect(null, { addTask })(NewTask)
