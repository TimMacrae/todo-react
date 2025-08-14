import {type FormEvent, useState} from "react";
import axios from "axios";
import {routerConfig} from "../../pages/routerConfig.ts";
import {status} from "./status.ts";
import { v4 as uuidv4 } from 'uuid';


type TodoStatusProps = {
    getTodos: ()=> void;
}

export function TodoCreate({getTodos}: TodoStatusProps) {
    const [text, setText] = useState("");

    const postAddTodo = async (): Promise<void> => {
        const newTodo = {id: uuidv4(), description: text, status: status.OPEN}
        const response = await axios.post(routerConfig.API.TODOS,newTodo );
        if(response.status === 200){
            getTodos();
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        await postAddTodo();
        setText("");
    };

    return (
        <div >
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className="border rounded px-2 py-1"
                    placeholder="Enter todo"
                />
                <button
                    type="submit"
                    className="border px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                    Add
                </button>
            </form>
        </div>
    )
}