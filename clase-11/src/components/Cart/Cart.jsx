import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContex";

const Cart = () => {
    const {darkMode} = useDarkModeContext()
    const {carrito,emptyCart, totalPrice, removeItem} = useCarritoContext()
    return (
        <>
            {carrito.length === 0 ? 
            <>
                <h1>Carrito vacio</h1>
                <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'}`}><Link  className="nav-link" to={'/'}>Continuar comprando</Link></button>
            </>
            :
            <div className="container cartContainer">
                {
                    carrito.map(prod => 
                        <div className="card mb-3" key={prod.id} style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={`../img/${prod.img}`} alt="Producto" className="img-fluid rounded-start" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="cardBody">
                                    <h5 className="card-title"> {`${prod.nombre} ${prod.marca}`}</h5>
                                    <p className="card-text">Cantidad: {prod.cant}</p>
                                    <p className="card-text">Precio unitario: {new Intl.NumberFormat('de-De').format(prod.precio)}</p>
                                    <p className="card-text">Precio total: {new Intl.NumberFormat('de-De').format(prod.precio * prod.cant)}</p>
                                </div>
                                <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                            </div>

                        </div>      
                )}

                <div>
                    <p>Resumen de la compra: ${ new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                    <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
                    <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'}`}><Link  className="nav-link" to={'/'}>Continuar comprando</Link></button>
                    <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'}`}><Link  className="nav-link" to={'/checkout'}>Finalizar Compra</Link></button>
                </div>   
            </div>

            }
        </>
        
    );
}

export default Cart;