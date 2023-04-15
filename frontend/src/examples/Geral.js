import FunctionSimples from "./components/FunctionSimples";
import FunctionDupla from "./components/FunctionDupla";
import Botao from "./layout/Botao";
function Geral(){
    return(
        <>
            <FunctionSimples/>
            <FunctionDupla/>
            <Botao classe="botao blue letterwhite"> Entrar </Botao>
            <Botao classe="botao red letterwhite"> Sair </Botao>
        </>
    )
}

export default Geral;