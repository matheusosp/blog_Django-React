import ItemComponent from './ItemComponent'

export default function ListComponent(){
    return (
    <div>
        <ul>
            <ItemComponent name={'Meu Item'}/>
            <ItemComponent name={'Meu Item 2'}/>
        </ul>
    </div>
    );
}