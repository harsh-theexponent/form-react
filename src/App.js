import './App.css';
import Heading from'./Heading';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import Home from './Home';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Heading></Heading>
        <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/logout" component={Logout}></Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
