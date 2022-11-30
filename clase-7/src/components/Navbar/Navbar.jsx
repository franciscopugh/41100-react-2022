
import Categorias from './Categorias/Categorias';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    
    return (

      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Categorias/>
              <CartWidget/>
        </div>
      </div>
    </nav>
    
    );
}

export default Navbar;