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
        // case "REMOVE_TASK":
        //   return state.filter(task => task.id !== action.taskId);
          
        default:
          return state;
      } 
      
    }
    
    export default tasksReducer