import { useState } from 'react'

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState("")
    const [categoria, setCategoria] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault() //criação da tarefa
        if(!value || !categoria) return //validação de dados nulos, quandos os campos não estão preenchidos a tarfea não pode ser criada
        console.log(value, categoria)
        // se os valores forem preenchidos, vou executar todo e limpar os campos
        addTodo(value, categoria)
        setValue("")
        setCategoria("")

    }
    
    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}> {/* a cada vez que o formulario for enviado, a handleSubmit é disparada */}
                <input type="text" placeholder="Digite o titulo" value={value} onChange={(e) => setValue(e.target.value)}></input>
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm
