import type {Todo} from "./types.ts";
import { statusColor} from "./status.ts";
import {TodoActions} from "./TodoActions.tsx";

type TodoProps = {
    todo: Todo
    getTodos: () => void
}


export function Todo({todo, getTodos}: TodoProps) {
    return (
        <div className="bg-gray-100 border border-gray-300 rounded-lg shadow p-4 flex flex-col gap-2 mb-4">
            <div className="flex justify-end">
                 <span className={`px-2 py-1 rounded-full text-xs font-bold self-start ${statusColor[todo.status]}`}>
                    {todo.status}
                 </span>
            </div>
            <div className="text-black font-semibold text-lg">{todo.description}</div>

            <TodoActions todo={todo} getTodos={getTodos}/>
        </div>
    )
}