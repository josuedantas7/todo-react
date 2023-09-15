import { useState } from 'react'

function TodoForm({ addTodo }) {

    const [value,setValue] = useState('')
    const [category,setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!value || !category) {
            alert('Preencha todos os campos')
            return
        }

        addTodo (value,category)

        setValue('')
        setCategory('')
    }

    return (
        <div>
            <h2 className='todo-form'>
                Criar Tarefa
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={(({target}) => setValue(target.value))} placeholder='Digite o titulo' />
                <select value={category} onChange={({target}) => setCategory(target.value)}>
                    <option value="" disabled>Selecione uma categoria</option>
                    <option value="Trabalho" >Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit'>Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm