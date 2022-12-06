import {useState} from 'react';

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);
    /*
    const boton = document.getElementById("boton1")
    console.log(boton) NO SE PUEDE*/
                            //1
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <div>
            <button onClick={restar} className='btn btn-light'><i className="fas fa-minus"></i></button>
                    {contador}
            <button onClick={sumar} className='btn btn-light'><i className="fas fa-plus"></i></button>
            <button className="btn btn-dark" ><i className="fas fa-cart-plus"></i></button>
        </div>
    );
}

export default ItemCount;
