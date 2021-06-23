export const addTask = taskObj => {
    return (dispatch) => {
        fetch('http://localhost:3090/tasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({taskObj})
        })
        .then( r => r.json())
        .then( r => {
            dispatch({type: "ADD_TASK", task: r})})
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

export const updateStatus = (task) => {
    return (dispatch) => {
        fetch(`http://localhost:3090/tasks/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({id: task.id, status: task.status})
        })
        .then( r => r.json())
        .then( r => {
            dispatch({type: "UPDATE_STATUS", task: r})})
    }
}