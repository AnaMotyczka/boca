import Logo from "./img/logobocaweb.png";

export const Cabecalho = () => {
    return(
        <div className = "Cabecalho">
            <img src={Logo} alt="Logo BocaWeb" className="logo"/>
            <div className = "titulo-cabecalho">
                <h1>BocaWeb </h1>
                <h2>O seu portal de Audiodescrição</h2>
            </div>
        </div>
    )
}