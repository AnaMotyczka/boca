export const Busca = ({busca, buscaODA}) => {
    return(
        <div className = "busca">
          <input className="input"
            name='busca'
            type='text'
            value={busca}
            placeholder='Busca'
            onChange={buscaODA}
          />
        <p>{odas.length} odas</p>
        </div>
    )
}