import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Form from './components/Form';
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
      <Form
        travel={travel}
        setTravel={setTravel}
        EnvioFormulário={EnvioFormulário}
      />
      {
          travels.map(viagem=><h3 key={viagem.id}>Lugar da viagem: {viagem.nome}</h3>)
      }
    </div>
  );
}

export default App;
