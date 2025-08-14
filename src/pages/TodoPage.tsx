import {useNavigate, useParams} from "react-router-dom";
import {type FormEvent, useEffect, useState} from "react";
import {routerConfig} from "./routerConfig.ts";
import axios from "axios";
import {type Todo} from "../components/todo/types.ts"
import {status} from "../components/todo/status.ts";

export function TodoPage() {
    const navigate = useNavigate()
    const [todo, setTodo] = useState<Todo>()
    const [editText, setEditText] = useState("");
    const [editStatus, setEditStatus] = useState("OPEN");

    const {id} = useParams()

    const getTodo = async () => {
        try {
            const response = await axios.get(`${routerConfig.API.TODOS}/${id}`)
            if (response.status === 200) {
                setTodo(response.data)
                setEditStatus(response.data.status)
                setEditText(response.data.description)
            }
        } catch (e) {
            console.error(e)
        }
    }

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        try {
            if (todo) {
                const response = await axios.put(`${routerConfig.API.TODOS}/${todo.id}/update`, {
                    ...todo,
                    description: editText,
                    status: editStatus
                });
                if (response.status === 200) {
                    navigate(routerConfig.URL.HOME);
                }
            }
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
            getTodo()
        },
        [])

    return (
        <div className="w-full flex flex-col items-center h-screen justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-[300px] flex gap-2  flex-col "
            >
                <div>
                    <label className="block text-left mb-2" htmlFor="text">Todo description</label>
                    <input
                        type="text"
                        name="text"
                        value={editText}
                        onChange={e => setEditText(e.target.value)}
                        className="border rounded px-2 py-1 w-full"
                    />
                </div>
                <div>
                    <label className="block text-left mb-2" htmlFor="status">Todo status</label>

                    <select
                        name="status"
                        value={editStatus}
                        onChange={e => setEditStatus(e.target.value)}
                        className="border rounded px-2 py-1 w-full"
                    >
                        <option value={status.OPEN}>{status.OPEN}</option>
                        <option value={status.IN_PROGRESS}>{status.IN_PROGRESS}</option>
                        <option value={status.DONE}>{status.DONE}</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="border px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                    Save
                </button>
            </form>
        </div>
    )
}