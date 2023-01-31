import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import ListProducts from './pages//products/ListProducts';
import CreateProducts from './pages/products/CreateProducts';
import './App.css';
import {Nav, Footer} from './components/components'



function App() {
  return (
    <>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path="/" index element={ <Home/> } />
          <Route path="/listProducts"  element={<ListProducts/>} />
          <Route path="/products/create"  element={<CreateProducts/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
   
        
    </>
  );
}

export default App;
