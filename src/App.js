import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './layout/Layout';
import Contact from './pages/Contact'
import About from './pages/About';
import Home from './pages/Home';
import ProductDetails from './components/ProductDetails';
import NewProduct from './pages/NewProduct';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route Route path='/' element={<Layout/> } >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='newproduct' element={<NewProduct />} />
        <Route path='products/:id' element={<ProductDetails/>} />


      </Route>

    </Routes>

   
    </BrowserRouter>
      
    
  );
}

export default App;
