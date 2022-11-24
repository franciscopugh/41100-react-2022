import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
const App = () => {

  
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Hola,buenas tardes"}/>
      <ItemCount stock={10}/>
    </>
      
  );
}

export default App;