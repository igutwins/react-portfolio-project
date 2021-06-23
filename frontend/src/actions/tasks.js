export const addTask = task => {
    return {
        type: "ADD_TASK",
        task: Object.assign({}, task)
    }
}

export const fetchTasks = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_TASKS"})
        fetch('http://localhost:3090/tasks')
            .then( r => r.json())
            .then( r => {
                dispatch({type: "ADD_TASKS", tasks: r})
            })
    }
}