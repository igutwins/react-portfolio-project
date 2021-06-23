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
            
            //here i need to update the status of the existing object in state
            //action.taskId
            //action.newStatus
            let x = action.task
            
            console.log(state.tasks)
            return {
              ...state.tasks,
              backlog: [...state.tasks.backlog.filter(i => i.id !== x.id)],
              inProgress: [...state.tasks.inProgress.filter(i => i.id !== x.id)],
              forReview: [...state.tasks.forReview.filter(i => i.id !== x.id)],
              done: [...state.tasks.done.filter(i => i.id !== x.id)],
            }
        // case "REMOVE_TASK":
        //   return state.filter(task => task.id !== action.taskId);
          
        default:
          return state;
      } 
      
    }
    
    export default tasksReducer