import { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar para a prova",
      categoria: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Limpar a casa",
      categoria: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Arrumar as panilhas",
      categoria: "Trabalho",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

  //função para criar uma nova tarefa(todo)
  const addTodo =(text, categoria) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      categoria,
      isCompleted: false, //começa como falso em todos as tarefas(todos)
    }
  ] //recebe todas as tarefas(todos) atuais e uma nova tarefa(todo)
  
  setTodos(newTodos) //atualiza a lista

  }

  //remove as tarefas
  const removeTodo = (id) => {
    const newTodos = [...todos]
    //ele pega os ids dos todos que não são iguais ao selecionado e retorna eles na lista, e o todo tiver o id igual ele vai retorna como nulo
    const filterTodos = newTodos.filter(todo => 
      todo.id !== id ? todo : null
    )
    setTodos(filterTodos)
  }

  //completar tarefas
  const completeTodo = (id) => {
    const newTodos = [...todos]
    //se o id for igual a id o isCompleted irá mudar para o contrario do estado atual, se não for o id da tarefa(todo) igual eu retorno a tarefa(todo) completa
    //posso completar ou descompletar a tarefa ao clicar no botão
    newTodos.map((todo) => 
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    )
    setTodos(newTodos)
  }

  return (
    <>
      <div className="app">
        <h1>Lista De Tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className="todo-list">
          {todos
          .filter((todo) => filter === "All" 
          ? true /* se filter for igual a All retorna true, não filtra nada */
          : filter === "Completed" 
          ? todo.isCompleted /* se o filter for igual a Completed, são retornadas as tarefas que tem o isCompleted como true */
          : !todo.isCompleted /* se não for igual, são retornadas as tarefas ques estão como false */
          ) 
          .filter((todo) => 
            todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())/* se no state de busca tiver caracteres igual ao do titulo ele traz para mim */
          )
          .sort((a, b) => sort === "Asc" /* comparação entre dois elementos, a e b */
          ? a.text.localeCompare(b.text) /* se o sort for igual a Asc, ele valida se o texto a(o primeiro item da lista) for maior que o texto b, atua em ordem alfabetica(A ao Z) */
          : b.text.localeCompare(a.text)) /* se não for igual, ele valida se o texto b for maior que o texto a, atua em ordem alfabetica ao contrario(Z ao A) */
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} /> /* id não se repete */
          ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </>
  );
}

export default App
