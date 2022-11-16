import logo from './logo.svg';
import './App.css';
import {NavBar} from './NavBar';
import Bisection from'./Element/Bisection';
import FalsePosition from './Element/FalsePosition';
import OnePoint from './Element/OnePoint';
import Newton from './Element/Newton';
import Secant from './Element/Secant';
import Cramer from './Element/Cramer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Bisection" element={<Bisection/>} />
        <Route path="/FalsePosition" element={<FalsePosition/>} />
        <Route path="/OnePoint" element={<OnePoint/>} />
        <Route path="/Newton" element={<Newton/>} />
        <Route path="/Secant" element={<Secant/>} />
        <Route path="/Cramer" element={<Cramer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
