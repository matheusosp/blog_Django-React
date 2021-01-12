


export default function ItemComponent(props:any){
    const status = props.status;
    return <div>
                <li> { props.name } 
                    <p>Status: {status ? <div>Finalizado</div> : <div>Não Finalizado</div>} </p>
                </li>
            </div>
}