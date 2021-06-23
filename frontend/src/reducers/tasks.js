const tasksReducer = (state = {tasks: {
    backlog: [],
    inProgress: [],
    forReview: [],
    done: []
}, loading: false}, action) => {
    
      switch(action.type){
        
        case "LOADING_TASKS":
          return {
            ...state, 
            tasks: state.tasks,
            loading: true
          };
        
        case "ADD_TASKS":
          return {
            ...state, 
            tasks: action.tasks,
            loading: false
          };

          case "ADD_TASK":
            return {
              ...state, 
              tasks: action.tasks,
              loading: false
            };

          case "UPDATE_STATUS":
            console.log(action)
            let x = action.task;
            let newStatus 
            switch (action.task.status){
              case "For Review":
                newStatus = "forReview"
                break
              case "Backlog":
                newStatus = "backlog"
                break
              case "In Progress":
                newStatus = "inProgress"
                break
              case "Done":
                newStatus = "done"
                break
            };
            
            let updatedState = {
              ...state,
              tasks: {
                backlog: [...state.tasks.backlog.filter(i => i.id !== x.id)],
                inProgress: [...state.tasks.inProgress.filter(i => i.id !== x.id)],
                forReview: [...state.tasks.forReview.filter(i => i.id !== x.id)],
                done: [...state.tasks.done.filter(i => i.id !== x.id)],
              }
            }
            console.log(newStatus)
            updatedState.tasks[newStatus].push(x)

            return {
              ...updatedState
            }

        default:
          return state;
      } 
      
    }
    
    export default tasksReducer