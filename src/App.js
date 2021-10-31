import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Footer from './components/Footer';
import News from './pages/News';
import About from './pages/About'
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
<Router>
<Navbar />
<Switch>
  <Route path='/' exact component={Home} /> 
  <Route path='/news' exact component={News} /> 
  <Route path='/about' exact component={About} /> 
  <Route path='/contact' exact component={Contact} /> 
</Switch>
  <Footer/>
  </ Router>

    </div>
  );
}

export default App;
