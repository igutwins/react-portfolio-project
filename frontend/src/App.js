import './App.css';
import GridArea from './components/GridArea'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewTask from './components/NewTask'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Route exact path='/' render={() => <GridArea/>}/>
        <Route exact path='/new' render={routerProps => <NewTask {...routerProps}/>}/>
      </div>
    </Router>
  );
}

export default App;
