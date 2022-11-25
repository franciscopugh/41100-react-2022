import Item from "../Item/Item";
//Modificar mi array de Objetos
const ItemList = ({productList}) => {
    return (
        <div>
            {productList.map(product => <Item key={product.id} producto={product}/>)}
        </div>
    );
}

export default ItemList;
