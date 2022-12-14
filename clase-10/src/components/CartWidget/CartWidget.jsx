import { Link } from "react-router-dom";
const CartWidget = () => {
  
    return (
        <>
            <button className="btn btn-secondary cartWidget">
                    <Link to={'/cart'} className="nav-link">
                        <i className="fas fa-shopping-cart fa-lg"></i>
                        <span className="cantCarrito">0</span>
                    </Link>
                        
            </button>
                
        </>
    );
}

export default CartWidget;
