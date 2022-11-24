import ItemList from "../ItemList/ItemList";
import {consultarBDD} from '../../assets/funciones.js'

//Consultar BDD
const ItemListContainer = ({greeting}) => {

    consultarBDD().then(productos => console.log(productos))
    return (
        <>
         
            <p>{greeting}</p>
        </>
    );
}

export default ItemListContainer;
