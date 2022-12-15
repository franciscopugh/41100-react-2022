import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContex";

const Cart = () => {
    const {darkMode} = useDarkModeContext()
    const {carrito} = useCarritoContext()
    return (
        <>
            {carrito.length === 0 ? 
            <>
                <h1>Carrito vacio</h1>
                <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'}`}><Link  className="nav-link" to={'/'}>Continuar comprando</Link></button>
            </>
            :
            <>
                <h1>Productos</h1>
                <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'}`}><Link  className="nav-link" to={'/'}>Continuar comprando</Link></button>
                <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'}`}><Link  className="nav-link" to={'/checkout'}>Finalizar Compra</Link></button>
            </>

            }
        </>
        
    );
}

export default Cart;