import { ADD, COMPLETE, DELETE, EDIT, FILTER } from "./actionTypes"


export const handleAdd=(newTask)=>{
    return{
        type:ADD,
        payload:newTask,
    }
};
export const handleDelete=(IS)=>{
    return{
        type:DELETE,
        payload:IS,
    }
}
export const handleComplete=(compte)=>{
    return{
        type:COMPLETE,
        payload:compte,
    }
}
export const handleEdite=(editeTask)=>{
    return{
        type:EDIT,
        payload:editeTask,
    }
}
export const handleFilter=(task)=>{
    return{
        type:FILTER,
        payload:task,
    }
}
