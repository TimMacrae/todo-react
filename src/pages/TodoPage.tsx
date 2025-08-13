import {useEffect, useState} from "react";
import axios from "axios";
import {routerConfig} from "./routerConfig.ts";
import type {Todo as TodoType, TodoGetResponse} from "../components/todo/types.ts";
import {TodoStatusColumn} from "../components/todo/TodoStatusColumn.tsx";

export function TodoPage() {
    const [todos, setTodos] = useState<TodoType[]>([])


    const getTodos = async (): Promise<void> => {
        try {
            const response: TodoGetResponse = await axios.get(routerConfig.API.GET_TODOS);
            console.log(response);
            setTodos(response?.data || [])
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTodos()
    }, []);

    console.log(todos);

    return (
        <>
            <h1 className="text-3xl font-bold mb-8" >Todos tracker</h1>
            <section className="grid grid-cols-3 gap-x-2">
                <TodoStatusColumn status={"OPEN"} todos={todos} getTodos={getTodos} />
                <TodoStatusColumn status={"IN_PROGRESS"} todos={todos} getTodos={getTodos}  />
                <TodoStatusColumn status={"DONE"} todos={todos} getTodos={getTodos}  />
            </section>
        </>)
}