import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
const App = () => {

  
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Hola,buenas tardes"}/>
    </>
      
  );
}

export default App;