import type { Todo} from "./types.ts";
import {TodoStatusButton} from "./TodoStatusButton.tsx";
import {status, statusColor} from "./status.ts";

type TodoActionsProps = {
    todo: Todo
    getTodos: () => void
}

export function TodoActions({todo, getTodos}: TodoActionsProps) {
    const todoStatus = todo.status;
    switch (todoStatus) {
        case status.OPEN:
            return (
                <div className="flex justify-end">
                    <TodoStatusButton status={status.IN_PROGRESS} todo={todo} statusColors={statusColor[status.OPEN]}  getTodos={getTodos}/>
                </div>)
        case status.IN_PROGRESS:
            return (
                <div className="flex justify-between">
                    <TodoStatusButton status={status.OPEN} todo={todo} statusColors={statusColor[status.OPEN]} getTodos={getTodos}/>
                    <TodoStatusButton status={status.DONE} todo={todo} statusColors={statusColor[status.DONE]} getTodos={getTodos}/>
                </div>
            )
        case status.DONE:
            return (
                <div className="flex justify-start">
                    <TodoStatusButton status={status.IN_PROGRESS} todo={todo} statusColors={statusColor[status.IN_PROGRESS]} getTodos={getTodos}/>
                </div>
            )

        default:
            return null
    }
}