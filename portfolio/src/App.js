import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import bootstrap from 'bootstrap';


function App() {
  return (
    <Router>
      <Nav />

    </Router>
    // <>Hello world</>
  );
}

export default App;
