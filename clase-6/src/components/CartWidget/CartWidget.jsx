
const CartWidget = () => {
  
    return (
        <>
            <ul className='navbar-nav me-auto cartWidget'>
                <li className="nav-item">
                        <button className="btn btn-secondary">
                            <i className="fas fa-shopping-cart fa-lg"></i>
                                <span className="cantCarrito">0</span>
                            </button>
                </li>
            </ul>
        </>
    );
}

export default CartWidget;
