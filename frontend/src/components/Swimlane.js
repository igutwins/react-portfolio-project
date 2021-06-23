import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Task from './Task';

class Swimlane extends Component {
    
    render(){ 
        return(<Col sm={3} className="swimlane">
            <Row>
            {this.props.title}
            </Row>
            <Row>
                {this.props.tasks.map(x => <Task title={x.title} description={x.description} assignee={x.assignee} reviewer={x.reviewer}/>)}
            </Row>
            </Col>)
    }
}


export default Swimlane