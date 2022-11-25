
const Item = ({prod}) => {
    return (
        <div className="card border-light mb-3 cardProducto">
                        <img src={`../img/${prod.img}`}className="card-img-top" alt="..." />
                        <div className="card-body cardBody">
                            <h5 className="card-title">{prod.nombre} {prod.modelo}</h5>
                            <p className="card-text">*{prod.marca}*</p>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <button className='btn btn-secondary'>Ver Producto</button>
                        </div>
        </div>
    );
}

export default Item;
