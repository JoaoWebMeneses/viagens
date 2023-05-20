import { FormatarData } from '../fn-helpers/Data'
import './Card.css'
import {CgTrash} from 'react-icons/cg'
import {SiEditorconfig} from 'react-icons/si'
import { useState } from 'react'
function Card(props) {
    const {id,data,desc,price} = props
    const [isDelete,setIsDelete] = useState(false)
    const deleteMode=()=>{
        setIsDelete(true);
        setTimeout(()=>{
            props.deleteTravel(id)
        }, 700)
    }
    const setEditing = ()=>{
        props.setTravel({
            nome: props.nome,
            data: data.slice(0, 16),
            desc: desc,
            price: price
        })
        props.setEditID(id)
    }
    return(
        <>
            <div className={isDelete? "card disappear": "card"}>
                <h1>{props.nome}</h1>
                <div className="conteudoCard">
                    <p>Lugar da Viagem: {desc}</p>
                    <p>Data da Viagem: {FormatarData(data)}</p>
                    <p className='price'>Preço: {price}</p>
                </div>
                <div className="bottom">
                    <div className="btns">
                        <div 
                            onClick={()=>deleteMode()}
                            id='trashDelete'
                            className='icons'
                        >
                            <CgTrash size={32}/>
                        </div>
                        <div 
                            id='editIcon'
                            className="icons"
                            onClick={()=>setEditing()}
                        >
                            <SiEditorconfig size={32}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;