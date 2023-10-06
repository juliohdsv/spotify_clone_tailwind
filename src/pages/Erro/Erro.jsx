import { Link } from "react-router-dom";

export default function Erro(){
    return(
        <div className="container-erro">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to="/">Voltar para Home</Link>
        </div>
    );
}