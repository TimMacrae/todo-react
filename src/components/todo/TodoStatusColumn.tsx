import type {Status, Todo as TodoType} from "./types.ts";
import {Todo} from "./Todo.tsx";

type TodoStatusProps = {
    todos: TodoType[];
    status: Status;
    getTodos: ()=>void
}

export function TodoStatusColumn({todos, status, getTodos}: TodoStatusProps) {
    const filteredTodos = todos.filter(todo => todo.status === status)

    return (
        <div>
            <h3 className="mb-8">{status}</h3>
            <div>
                {filteredTodos.length > 0 && filteredTodos.map(todo => <Todo key={todo.id} todo={todo} getTodos={getTodos} />)}
            </div>
        </div>
    )
}