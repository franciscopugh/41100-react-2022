import './App.css';

const App = () => {
  const user = {nombre: "Pedro", apellido: "Parker"}

  return (
    <div>
       <h1 className='titulo parrafo' style={{fontFamily:'sans-serif'}}>Hola, buenas tardes!</h1>
       <p>{user.nombre}</p>
       <p>{user.apellido}</p>
       <input type="text" />
    </div>
  );
}

export default App;