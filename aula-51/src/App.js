import {BrowserRouter, Route, Router } from 'react-router-dom'
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';
import './App.css';
import Nav from './components/Nav'; 


function App() {
  return (
    <>
    
      <BrowserRouter>
      <Nav/>
        <Router>
          <Route path="/" index element={ <Home/> } />
          <Route path="/produtos"  element={<Produtos/>} />
          <Route path="/sobre"  element={<Sobre/>} />
        </Router>
      </BrowserRouter>
      <footer>
        <h3>  por Pedro Nest </h3>
      </footer>
    </>
  )
}

export default App;
