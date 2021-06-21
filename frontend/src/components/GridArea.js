import React, {Component} from 'react';
import Swimlane from './Swimlane';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

class GridArea extends Component {
    render(){
        return(
        <div>
            <h2>Kanban Board</h2>
            <Container sm={12}>
                <Row>
            <Swimlane title='Backlog'/>
            <Swimlane title='In Progress'/>
            <Swimlane title='For Review'/>
            <Swimlane title='Done'/>
            </Row>
            </Container>
        </div>
        )
    }
}

export default GridArea