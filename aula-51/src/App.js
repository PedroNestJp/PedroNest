import {BrowserRouter, Route, Router } from 'react-router-dom'
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';
import './App.css';


function App() {
  return (
    <div>
      <nav>
        <ul>
          <li> home </li>
          <li> Sobre </li>
          <li> Produtos </li>
        </ul>
      
    </nav>
      <BrowserRouter>
        <Router>
          <Route path="/" index element={ <Home/> } />
          <Route path="/produtos"  element={<Produtos/>} />
          <Route path="/sobre"  element={<Sobre/>} />
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App;
