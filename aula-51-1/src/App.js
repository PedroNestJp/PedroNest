import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';
import './App.css';
import {Nav, Footer} from './components/components'

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
      <Footer/>
   
        
    </>
  );
}

export default App;
