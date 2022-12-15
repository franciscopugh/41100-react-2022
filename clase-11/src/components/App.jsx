import './App.css';
//Router Dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Context
import { DarkModeProvider } from '../context/DarkModeContext';

//Componentes
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
const App = () => {
  
  return (
    <> 
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </DarkModeProvider>
        
      </BrowserRouter>
    </>
      
  );
}

export default App;