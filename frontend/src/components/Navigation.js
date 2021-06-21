import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    render(){
        return(<div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">PE Workflow Management Tool</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/new">Create New Task</NavLink>
              </Nav>
            </Navbar.Collapse> 
          </Navbar>
        </div>)
    }
}

export default Navigation