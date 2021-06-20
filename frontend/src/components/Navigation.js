import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

class Navigation extends Component {
    render(){
        return(<div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">PE Workflow Management Tool</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Button className="new-task">Create New Task</Button>
              </Nav>
            </Navbar.Collapse> 
          </Navbar>
        </div>)
    }
}

export default Navigation