import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className='filter'>
        <h2>Filtrar:</h2>
        <div className='filter-options'>
            <div>
                <p>Status</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}> {/* Dispara a função setFilter, muda o state para All, Completed ou Incomplete */}
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Asc")}>Asc</button> {/* Ao clicar nesse botão o setSort muda seu valor para Asc */}
                <button onClick={() => setSort("Desc")}>Desc</button> {/* Ao clicar nesse botão o setSort muda seu valor para Desc */}
            </div>
        </div>
    </div>
  )
}

export default Filter