import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
function App() {
  const [travels,setTravels] = useState([]);
  const [travel,setTravel] = useState({nome: '', data: '', price: 0, desc: '',})
  useEffect(()=>{
    axios.get('http://localhost:3001/api/v1/travels')
      .then(resposta=> setTravels(resposta.data))
      .catch(erro=> console.error(erro))
  }, [])
  function EnvioFormulário(event){
    event.preventDefault();
    axios.post('http://localhost:3001/api/v1/travels',{travel})
      .then(res=> {
        console.log(res.data)
        setTravels([...travels,res.data])
        setTravel({
          nome: '',
          data: '',
          price: 0,
          desc: ''
        })
      })
      .catch(error=> console.log(error))
  }
  return (
    <div className="App">
      <form onSubmit={EnvioFormulário}>
        <input
          id='nome'
          required
          value={travel.nome}
          placeholder='Nome da viagem'
          onChange={(e)=>setTravel({...travel,nome: e.target.value})}
        />
        <textarea
          required
          id='desc'
          onChange={(e)=>setTravel({...travel,data: e.target.value})}  
          value={travel.desc}
          placeholder='Endereço da viagem'     
        />
        <input
          required
          type='datetime-local'
          id='data'
          value={travel.data}
          placeholder='Data'
          onChange={(e)=>setTravel({...travel,data: e.target.value})}
        />
        <input
          id='price'
          required
          value={travel.price}
          placeholder='Preço'
          type='number'
          onChange={(e)=>setTravel({...travel,price: e.target.value})}
        />   
        <button>Cadastrar viagem</button>
      </form>
      {
          travels.map(viagem=><h3 key={viagem.id}>Lugar da viagem: {viagem.nome}</h3>)
      }
    </div>
  );
}

export default App;
