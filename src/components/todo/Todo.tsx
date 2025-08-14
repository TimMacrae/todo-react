import type {Todo} from "./types.ts";
import { statusColor} from "./status.ts";
import {TodoActions} from "./TodoActions.tsx";
import {Link} from "react-router-dom";
import {routerConfig} from "../../pages/routerConfig.ts";
import axios from "axios";
import {Trash} from "lucide-react";

type TodoProps = {
    todo: Todo
    getTodos: () => void
}


export function Todo({todo, getTodos}: TodoProps) {

    const handleDelete = async (id: string) => {
        try {
            const response = await axios.delete(`${routerConfig.API.TODOS}/${id}`);
            if (response.status === 200) {
                getTodos()
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="bg-gray-100 border border-gray-300 rounded-lg shadow p-4 flex flex-col gap-2 mb-4">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <button className="text-black" onClick={()=>handleDelete(todo.id)}>
                        <Trash className="w-4 h-4" />
                    </button>

                </div>
                 <span className={`px-2 py-1 rounded-full text-xs font-bold self-start ${statusColor[todo.status]}`}>
                    {todo.status}
                 </span>
            </div>
            <Link to={`${routerConfig.URL.TODO}/${todo.id}`} >
            <div className="text-black font-semibold text-lg">{todo.description}</div></Link>

            <TodoActions todo={todo} getTodos={getTodos}/>
        </div>
    )
}