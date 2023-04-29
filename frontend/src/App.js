import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
function App() {
  const [travels,setTravels] = useState([]);
  const [travel,setTravel] = useState({nome: ''})
  useEffect(()=>{
    axios.get('http://localhost:3001/api/v1/travels')
      .then(resposta=> setTravels(resposta.data))
      .catch(erro=> console.error(erro))
  }, [])
  function EnvioFormulário(event){
    event.preventDefault();
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
        <button>Cadastrar viagem</button>
      </form>
      {
          travels.map(viagem=><h1 key={viagem.id}>Lugar da viagem: {viagem.nome}</h1>)
      }
    </div>
  );
}

export default App;
