import { Link } from "react-router-dom";
const Cart = () => {
    return (
        <div>
            <h1>Imaginen productos</h1>
            <button className="btn btn-dark"><Link to={'/checkout'}>Finalizar Compra</Link></button>
        </div>
    );
}

export default Cart;
