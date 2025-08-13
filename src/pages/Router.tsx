import {routerConfig} from "./routerConfig.ts";
import {Route, Routes} from "react-router-dom";
import {TodoPage} from "./TodoPage.tsx";

export function Router() {
    return (
        <Routes>
            <Route path={routerConfig.URL.HOME} element={<TodoPage />} />

        </Routes>
    )
}