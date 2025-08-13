import {routerConfig} from "./routerConfig.ts";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./HomePage.tsx";

export function Router() {
    return (
        <Routes>
            <Route path={routerConfig.URL.HOME} element={<HomePage />} />

        </Routes>
    )
}