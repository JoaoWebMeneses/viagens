import './Card.css'
import {CgTrash} from 'react-icons/cg'
function Card(props) {
    const {id,data,desc,price} = props
    return(
        <>
            <div className='card'>
                <h1>{props.nome}</h1>
                <div className="conteudoCard">
                    <p>Lugar da Viagem: {desc}</p>
                    <p>Data da Viagem: {data}</p>
                    <p>Preço: {price}</p>
                </div>
                <div className="bottom">
                    <div className="botoes">
                        <div onClick={()=>props.deleteTravel(id)}>
                            <CgTrash size={32}/>
                        </div>
                        <div className="icons">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;