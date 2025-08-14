type RouterConfig = {
    URL:URL
    API:API
}

type URL = {
    HOME: string,
    TODO: string,
}

type API = {
    TODOS: string,
}

export const routerConfig:RouterConfig = {
    URL:{
        HOME:"/",
        TODO:"/todo"
    },
    API:{
        TODOS:"/api/todo",
    }
}


