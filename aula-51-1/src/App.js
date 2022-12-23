import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';
import './App.css';
import Nav from './components/Nav'

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path="/" index element={ <Home/> } />
          <Route path="/produtos"  element={<Produtos/>} />
          <Route path="/sobre"  element={<Sobre/>} />
        </Routes>
      </BrowserRouter>
   
        <footer>
          <h3>  por Pedro Nest </h3>
        </footer>
    </>
  );
}

export default App;
