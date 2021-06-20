import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Task from './Task' 

class Swimlane extends Component {
    render(){
        return(<Col sm={3} className="swimlane">
            <Row>
            {this.props.title}
            </Row>
            <Row>
                <Task/>
            </Row>
            </Col>)
    }
}

export default Swimlane