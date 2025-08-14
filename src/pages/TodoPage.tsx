import {useEffect, useState} from "react";
import axios from "axios";
import {routerConfig} from "./routerConfig.ts";
import type {Todo as TodoType, TodoGetResponse} from "../components/todo/types.ts";
import {TodoStatusColumn} from "../components/todo/TodoStatusColumn.tsx";
import {TodoCreate} from "../components/todo/TodoCreate.tsx";

export function TodoPage() {
    const [todos, setTodos] = useState<TodoType[]>([])


    const getTodos = async (): Promise<void> => {
        try {
            const response: TodoGetResponse = await axios.get(routerConfig.API.TODOS);
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
            <div className=" flex justify-between items-end mb-12">
            <h1 className="font-bold text-xs ">Todos tracker</h1>
            <TodoCreate getTodos={getTodos} /></div>
            <section className="grid grid-cols-3 gap-x-2">
                <TodoStatusColumn status={"OPEN"} todos={todos} getTodos={getTodos} />
                <TodoStatusColumn status={"IN_PROGRESS"} todos={todos} getTodos={getTodos}  />
                <TodoStatusColumn status={"DONE"} todos={todos} getTodos={getTodos}  />
            </section>
        </>)
}