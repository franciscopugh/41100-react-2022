import './App.css';
import Navbar from './Navbar/Navbar';
import Form from './Form/Form';
const App = () => {
  const busqueda = "Busca"
  return (
    <>
     <Navbar/>
     <Form busqueda={busqueda}/>
    </>
      
  );
}

export default App;