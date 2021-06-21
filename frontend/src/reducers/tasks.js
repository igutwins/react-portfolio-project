export default (state = [], action) => {

    let index;
    let task;
    
      switch(action.type){
        case "ADD_TASK":
          return state.concat(action.task);
    
        // case "REMOVE_TASK":
        //   return state.filter(task => task.id !== action.taskId);
          
        default:
          return state;
      } 
      
    }
    