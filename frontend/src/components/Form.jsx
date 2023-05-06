import './Form.css';
function Form({EnvioFormulário, travel, setTravel}){
    return(
        <>
        <div className="divForm">
            <form onSubmit={EnvioFormulário}>
                    <label> Lugar da viagem</label>
                    <input
                        id='nome'
                        required
                        value={travel.nome}
                        placeholder='Lugar da viagem'
                        onChange={(e)=>setTravel({...travel,nome: e.target.value})}
                    />
                    <label> Endereço da viagem</label>
                    <textarea
                        required
                        id='desc'
                        onChange={(e)=>setTravel({...travel,desc: e.target.value})}  
                        value={travel.desc}
                        placeholder='Endereço da viagem'     
                    />
                    <label> Data da viagem</label>
                    <input
                        required
                        type='datetime-local'
                        id='data'
                        value={travel.data}
                        placeholder='Data'
                        onChange={(e)=>setTravel({...travel,data: e.target.value})}
                    />
                    <label> Preço da viagem</label>
                    <input
                        id='price'
                        required
                        value={travel.price}
                        placeholder='Preço'
                        type='number'
                        onChange={(e)=>setTravel({...travel,price: e.target.value})}
                    />   
                    <button type='submit'>Cadastrar viagem</button>
                </form>
            </div>
        </>
    )
}

export default Form;