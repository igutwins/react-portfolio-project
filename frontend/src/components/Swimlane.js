import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux'
import Task from './Task';
import { fetchTasks } from '../actions/tasks'

class Swimlane extends Component {
    
    componentDidMount(){
        this.props.fetchTasks()
    }

    handleLoading = () => {
        if (this.props.loading){
            return <div> Loading... </div>
        } else { 
            return(
                <Row>
                    {this.props[this.props.objKey].map(x => 
                        <Task   key={x.id}
                                title={x.title} 
                                description={x.description} 
                                assignee={x.assignee} 
                                reviewer={x.reviewer}/>)}
                </Row>
        ) }
    }
    
    render(){ 
        return(<Col sm={3} className="swimlane">
            <Row>
            {this.props.title}
            </Row>
            {this.handleLoading()}
            </Col>)
    }
}

const mapStateToProps = state => {
    return {
        backlog: state.tasks.backlog,
        inProgress: state.tasks.inProgress,
        forReview: state.tasks.forReview,
        done: state.tasks.done,
        loading: state.loading
    }
}

export default connect(mapStateToProps,{fetchTasks})(Swimlane)