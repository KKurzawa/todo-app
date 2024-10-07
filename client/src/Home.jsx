import Create from "./Create"
import { useState, useEffect } from "react"
import axios from "axios"
import { BsCircleFill, BsTrashFill, BsFillCheckCircleFill } from "react-icons/bs";

const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/' + id)
            .then(result => { location.reload(), console.log(result) })
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
            .then(result => { location.reload(), console.log(result) })
            .catch(err => console.log(err))
    }
    return (
        <main className="w-[50%]">
            <Create />
            {todos.length === 0
                ? <article className="mt-3"><h2 className="text-2xl">No Todos</h2></article>
                : todos.map(todo => (
                    <article key={todo} className="todo-container flex items-center gap-2 w-full mt-3 p-2 rounded-lg">
                        <section className="checkbox flex items-center gap-2" onClick={() => handleEdit(todo._id)}>
                            {todo.done
                                ? <BsFillCheckCircleFill className="icon" />
                                : <BsCircleFill className="icon" />}
                            <p className={todo.done ? 'line-through text-2xl' : 'text-2xl'}>{todo.task}</p>
                        </section>
                        <section>
                            <span onClick={() => { handleDelete(todo._id) }}><BsTrashFill className="icon" /></span>
                        </section>
                    </article>

                ))}
        </main>
    )
}

export default Home