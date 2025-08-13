type RouterConfig = {
    URL:URL
    API:API
}

type URL = {
    HOME: string,
}

type API = {
    GET_TODOS: string,
}

export const routerConfig:RouterConfig = {
    URL:{
        HOME:"/",
    },
    API:{
        GET_TODOS:"/",
    }
}