type RouterConfig = {
    URL:URL
    API:API
}

type URL = {
    HOME: string,
}

type API = {
    TODOS: string,
}

export const routerConfig:RouterConfig = {
    URL:{
        HOME:"/",
    },
    API:{
        TODOS:"/api/todo",
    }
}


