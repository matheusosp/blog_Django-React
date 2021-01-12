


export default function ItemComponent(props:any){
    const status = props.status;
    return (
        <>
            <li> { props.name } 
                <p>Status: {status ? 'Finalizado' : 'Não Finalizado'} </p>
            </li>
        </>
    )
}