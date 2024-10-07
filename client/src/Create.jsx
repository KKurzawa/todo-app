import { useState } from "react"
import axios from 'axios'

const Create = () => {
    const [task, setTask] = useState()

    const handleAdd = () => {
        axios.post('http://localhost:3001/add', { task: task })
            .then(result => { location.reload(), console.log(result) })
            .catch(err => console.log(err))
    }
    return (
        <form className="flex flex-col gap-3 text-2xl">
            <label htmlFor="todo">
                Create Todo
            </label>
            <section className="flex flex-col items-center gap-3">
                <input
                    className="todo-input w-full p-2 text-2xl rounded-md"
                    type="text"
                    id="todo"
                    placeholder="Enter Todo"
                    autoComplete="off"
                    onChange={(e) => setTask(e.target.value)} />
                <button
                    disabled={!task ? true : false}
                    className={!task ? 'disabled-todo-btn w-full rounded-lg' : 'todo-btn w-full rounded-lg'}
                    type="button"
                    onClick={handleAdd}>Add</button>
            </section>
        </form>
    )
}

export default Create