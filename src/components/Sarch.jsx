
function Sarch({ search, setSearch }) {
  return (
    <div className="search">
        <h2>Pesquisar</h2>
        <input type="text" value={search} onChange={({target}) => setSearch(target.value)} placeholder="Digite para pesquisar..." />
    </div>
  )
}

export default Sarch