import React, {Component} from 'react';
import Swimlane from './Swimlane';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { fetchTasks } from '../actions/tasks'
import { connect } from 'react-redux'

class GridArea extends Component {

    componentDidMount(){
        this.props.fetchTasks()
    }

    handleLoading = () => {
        console.log(this.props)
        if (this.props.loading){
            return <div> Loading... </div>
        } else { 
            return(
                <Row>
                    <Swimlane title='Backlog' tasks={this.props.backlog}/>
                    <Swimlane title='In Progress' tasks={this.props.inProgress}/>
                    <Swimlane title='For Review' tasks={this.props.forReview}/>
                    <Swimlane title='Done' tasks={this.props.done}/>
                </Row>

        ) }
    }



    render(){
        return(
        <div>
            <h2>Kanban Board</h2>
            <Container sm={12}>
                {this.handleLoading()}
            </Container>
        </div>
        )

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



export default connect(mapStateToProps, {fetchTasks})(GridArea)