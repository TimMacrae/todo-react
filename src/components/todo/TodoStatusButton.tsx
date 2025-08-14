import {MoveRight, MoveLeft} from "lucide-react";
import type {Status, Todo} from "./types.ts";
import axios from "axios";
import {status as statusConst} from "./status.ts";

type TodoStatusButtonProps = {
    statusColors: string;
    status: Status;
    todo:Todo;
    getTodos:()=>void;
}

export function TodoStatusButton({todo , status, statusColors, getTodos}: TodoStatusButtonProps) {

    const handleUpdateTodoStatus = async () =>{
        try {
        todo.status = status;
        const response = await axios.put(`/api/todo/${todo.id}/update`, todo)
            if (response.status === 200) {
                getTodos()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button
            onClick={() => handleUpdateTodoStatus()}
            className={`px-2 py-1 font-bold self-start  ${statusColors} rounded text-xs flex items-center gap-1 transition`}>
            {status === statusConst.IN_PROGRESS && todo.status === statusConst.OPEN && <MoveRight/> }
            {status === statusConst.OPEN && todo.status === statusConst.IN_PROGRESS && <MoveLeft/> }
            {status === statusConst.IN_PROGRESS && todo.status === statusConst.DONE && <MoveLeft/> }
            {status === statusConst.DONE && <MoveRight/> }
        </button>)
}

