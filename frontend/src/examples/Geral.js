import FunctionSimples from "./components/FunctionSimples";
import FunctionDupla from "./components/FunctionDupla";
import Botao from "./layout/Botao";
function Geral(){
    return(
        <>
            <FunctionSimples/>
            <FunctionDupla/>
            <Botao>Entrar</Botao>
            <Botao>Sair</Botao>
        </>
    )
}

export default Geral;