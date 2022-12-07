import {useState} from 'react';

const ItemCount = ({inicial, stock, onAdd}) => {
    const [contador, setContador] = useState(inicial);
    /*
    const boton = document.getElementById("boton1")
    console.log(boton) NO SE PUEDE*/
                            //1
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    const agregarAlCarrito = () => onAdd(contador)

    return (
        <div>
            <button onClick={restar} className='btn btn-light'><i className="fas fa-minus"></i></button>
                    {contador}
            <button onClick={sumar} className='btn btn-light'><i className="fas fa-plus"></i></button>
            <button className="btn btn-dark" onClick={agregarAlCarrito}><i className="fas fa-cart-plus"></i></button>
        </div>
    );
}

export default ItemCount;
