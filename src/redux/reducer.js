
import { ADD, COMPLETE, DELETE, EDIT ,FILTER} from "./actionTypes";

const init={
 todos:[],
 filter:false,
};
export const reducer =(state=init,{type,payload})=>{
    switch (type) {
        case ADD:
            return{ ...state ,todos:[...state.todos,payload]}
        
        case DELETE:
            return{
             ...state,todos:state.todos.filter(el=>el.id!==payload)
            } 
        case COMPLETE:
            return{
                    ...state,todos:state.todos.map((el)=>el.id===payload?{...el,isDone:!el.isDone}:el)
                   
                }  
        case EDIT:
            return{
                  ...state,todos:state.todos.map(el=>el.id===payload.id?payload:el)
                } 
        case FILTER:
            return{
                ...state,filter:!state.filter
            }       
        default:
            return state;

    }
}

export default reducer