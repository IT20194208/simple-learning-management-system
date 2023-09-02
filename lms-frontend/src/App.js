import './App.css';
import AddStudentComponent from './components/AddStudentComponent';
import FooterComponents from './components/FooterComponents';
import HeaderComponent from './components/HeaderComponent';
import Home from './components/Home';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';  

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component = {Home}></Route>
            <Route path="/students" component = {ListEmployeeComponents}></Route>
            <Route path="/add-student" component={AddStudentComponent}></Route>
            <Route path="/edit-student/:id" component={AddStudentComponent}></Route>
          </Switch>
        </div>
      {/* <FooterComponents /> */}
      </Router>
    </div>
  );
}

export default App;
