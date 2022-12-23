import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/itemList.jsx';
import {getProductos, getProducto, updateProducto} from '../../assets/firebase.js';
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
            if(category) {
                getProductos().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            } else {
                getProductos().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            }

           /* getProducto("4yGGt8Rm1qtu9ECpRU3C").then(prod => {
                prod.stock -= 16
                delete prod.id
                updateProducto("4yGGt8Rm1qtu9ECpRU3C", prod).then(estado => console.log(estado))
            })*/

           

    },[category]);
    
    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>
       
    );
}

export default ItemListContainer;
