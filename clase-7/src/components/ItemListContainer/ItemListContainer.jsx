import {useState, useEffect} from 'react';
import ItemList from '../itemList/itemList.jsx';
import { consultarBDD } from '../../assets/funciones.js';
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
            consultarBDD().then(products => {
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        
    },[]);
    
    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>
       
    );
}

export default ItemListContainer;
