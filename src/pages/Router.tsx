import {routerConfig} from "./routerConfig.ts";
import {Route, Routes} from "react-router-dom";
import {TodosPage} from "./TodosPage.tsx";
import {TodoPage} from "./TodoPage.tsx";

export function Router() {
    return (
        <Routes>
            <Route path={routerConfig.URL.HOME} element={<TodosPage />} />
            <Route path={`${routerConfig.URL.TODO}/:id`} element={<TodoPage />} />
        </Routes>
    )
}