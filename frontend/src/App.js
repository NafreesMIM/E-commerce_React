
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCatogory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Loginsignup from './Pages/Loginsignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory categrory="mens"/>}/>
          <Route path='/womens' element={<ShopCategory categrory="womens"/>}/>
          <Route path='/kids' element={<ShopCategory categrory="kids"/>}/>
          <Route path="Product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/card' element={<Card/>}/>
          <Route path='/login' element={<Loginsignup/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
