
import ItemComponent from './ItemComponent'
import { Product } from './types';

export default function ListComponent(props:any){
    const products: Product[] = props.item;
    return (
    <div>
        <h2>{props.listName}</h2>
        <ul>
            {products.map(item => {
                return <ItemComponent key={item.id} name={item.name} status={item.done}/>;
            })}
        </ul>
    </div>
    );
}