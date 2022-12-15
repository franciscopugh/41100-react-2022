import { useContext, useState, createContext  } from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([]);
    
    //VerCantidad - Agregar productos - Eliminar producto - 
    //Vaciar el carrito - FinalizarCompra - Buscar producto

    const isInCart = (id) => {
        //Retorna producto (V) o undefined (F)
        return carrito.find(producto => producto.id === id)    
    }

    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux = [...carrito]
            aux[indice].cant = cantidad
            setCarrito(aux)
        } else {
            const nuevoProducto = {
                ...producto,
                cant: cantidad
            }
            /*const aux = carrito
            aux.push(nuevoProducto)
            setCarrito(aux)*/
            setCarrito([...carrito,nuevoProducto])
        }
    }

    const emptyCart = () => {
        setCarrito([])
    }

    const removeItem = (id) => {
        /*const aux = [...carrito]
        const indice = aux.findIndex(prod => prod.id === id)
        setCarrito(aux.splice(indice,1))*/
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    const getItemQuantity = () => {
        return carrito.reduce((acum,prod) => acum += prod.cant, 0)
    }

    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }
    console.log(carrito)
    return (
        <CarritoContext.Provider value={{carrito, isInCart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CarritoContext.Provider>
    )

}