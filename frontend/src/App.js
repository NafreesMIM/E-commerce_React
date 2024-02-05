
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Card from './Pages/Card';
import Loginsignup from './Pages/Loginsignup';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory catogory="mens"/>}/>
          <Route path='/womens' element={<ShopCategory catogory="womens"/>}/>
          <Route path='/kids' element={<ShopCategory catogory="kids"/>}/> 
          <Route path="/product" element={<Product/>}/>
            <Route path=':product' element={<Product/>}></Route> 
          <Route path='/card' element={<Card/>}/>
          <Route path='/login' element={<Loginsignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
