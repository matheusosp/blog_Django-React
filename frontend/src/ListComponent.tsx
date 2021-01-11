import ItemComponent from './ItemComponent'

export default function ListComponent(props:any){
    
    return (
    <div>
        <h2>{props.listName}</h2>
        <ul>
            <ItemComponent name={'Meu Item'}/>
            <ItemComponent name={'Meu Item 2'}/>
        </ul>
    </div>
    );
}