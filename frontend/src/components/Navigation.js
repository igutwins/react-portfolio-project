import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    render(){
        return(<div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand>PE Workflow Management Tool</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink to="/" style={{"margin":"10px", "padding":"10px", 'border-radius': '0.25rem'}}>
                  Home
                </NavLink>
                <NavLink to="/settings" style={{"margin":"10px", "padding":"10px", 'border-radius': '0.25rem'}}>
                  Settings
                </NavLink>
                <NavLink to="/new" style={{'background-color': '#007bff', 'color': 'white', "margin":"10px", "padding":"10px", 'border-radius': '0.25rem'}}>
                  Create New Task
                </NavLink>
              </Nav>
            </Navbar.Collapse> 
          </Navbar>
        </div>)
    }
}

export default Navigation