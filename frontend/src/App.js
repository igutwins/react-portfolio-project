import './App.css';
import GridArea from './components/GridArea'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewTask from './components/NewTask'
import Settings from './components/Settings'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Route exact path='/' render={() => <GridArea/>}/>
        <Route exact path='/new' render={routerProps => <NewTask {...routerProps}/>}/>
        <Route exact path='/settings' render={routerProps => <Settings {...routerProps}/>}/>
      </div>
    </Router>
  );
}

export default App;
